const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const {
  uploadImageToFirebase,
  deleteImageFromFirebase,
} = require("../../utilities/helpers/firebaseStorage");
const Image = require("../../models/image"); // Import Image model

// Upload and save optimized image data
const uploadImageHandler = async (req, res) => {
  try {
    const file = req.file;
    let { altText, title, description, keywords } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "User is not authenticated" });
    }

    if (!file) return res.status(400).json({ message: "No file provided" });

    const fileOriginalName = file.originalname
      .split(".")
      .slice(0, -1)
      .join(".");

    // Generate a unique filename
    const fileName = `${uuidv4()}_${fileOriginalName}.webp`;
    const thumbnailFileName = `${uuidv4()}_${fileOriginalName}.webp`;

    const fileNameAlreadyExist = await Image.findOne({
      originalName: fileOriginalName,
    });

    if (fileNameAlreadyExist) {
      return res
        .status(401)
        .json({ message: "file with the same name already exit" });
    }
    // Process image using Sharp to create a thumbnail and compressed image
    const mainImageBuffer = await sharp(file.buffer)
      .resize({ width: 1200 }) // Resize for full-size
      .webp({ quality: 100 }) // Compress and convert to WebP
      .toBuffer();

    if (!mainImageBuffer) {
      return res
        .status(401)
        .json({ message: "main image compression not succecssful" });
    }
    const thumbnailBuffer = await sharp(file.buffer)
      .resize({ width: 300 }) // Resize for thumbnail
      .webp({ quality: 80 }) // Compress and convert to WebP
      .toBuffer();

    if (!thumbnailBuffer) {
      return res
        .status(401)
        .json({ message: "thumbnail image compression not succecssful" });
    }
    // Get public URL
    const mainImageUrl = await uploadImageToFirebase(fileName, mainImageBuffer);
    if (!mainImageUrl) {
      return res
        .status(401)
        .json({ message: "main image uploading to firebase not succecssful" });
    }

    const thumbnailUrl = await uploadImageToFirebase(
      thumbnailFileName,
      thumbnailBuffer
    );
    if (!thumbnailUrl) {
      return res.status(401).json({
        message: "thumbnail image uploading to firebase not succecssful",
      });
    }

    const { width, height, format, size } = await sharp(
      mainImageBuffer
    ).metadata();
    // Save image metadata to MongoDB
    const newImage = new Image({
      fileName,
      originalName: file.originalname,
      url: mainImageUrl,
      altText,
      title,
      description: description || "",
      size: size || file.size,
      format: format || "webp",
      width: width || 1200,
      height: height || null,
      thumbnailUrl: thumbnailUrl,
      uploadedBy: user ? user._id : null,
      keywords: keywords ? keywords.split(",") : [],
    });

    await newImage.save();
    return res.status(201).json({
      message: "Image uploaded and saved successfully",
      image: newImage,
    });
  } catch (error) {
    console.error("Error uploading image:", error);
    return res.status(500).json({ message: "Failed to upload image", error });
  }
};

const getImageHandler = async (req, res) => {
  try {
    const { id } = req.params;

    const image = await Image.findById(id).populate("uploadedBy", "username");

    if (!image) {
      return res.status(404).json({ message: "Image not found" });
    }

    res.status(200).json({ image });
  } catch (error) {
    console.error("Error fetching image:", error);
    res.status(500).json({ message: "Failed to fetch image", error });
  }
};

const getAllImageHandler = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query;

    page = Math.max(1, parseInt(page)); // Ensure page is at least 1
    limit = Math.max(1, parseInt(limit)); // Ensure limit is at least 1

    const skip = (page - 1) * limit;

    // Fetch images and total count
    const [images, total] = await Promise.all([
      Image.find()
        .populate("uploadedBy", "username")
        .skip(skip)
        .limit(limit)
        .lean(), // Convert Mongoose docs to plain objects
      Image.countDocuments(),
    ]);

    if (!images.length)
      return res.status(404).json({ message: "No images found" });

    res.status(200).json({
      success: true,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      totalImages: total,
      images,
    });
  } catch (error) {
    console.error("Error fetching images:", error);
    res.status(500).json({ message: "Failed to fetch images", error });
  }
};

const updateImageHandler = async (req, res) => {
  try {
    const { title, description, altText, keywords } = req.body;
    const { id } = req.params;
    user = req.user;

    if (!user) {
      return res.status(401).json({ message: "User is not authenticated" });
    }
    const image = await Image.findById(id);

    if (!image) return res.status(404).json({ message: "Image not found" });

    image.title = title || image.title;
    image.description = description || image.description;
    image.altText = altText || image.altText;
    image.keywords = keywords ? keywords.split(",") : image.keywords;

    await image.save();
    res.status(200).json({ message: "Image metadata updated", image });
  } catch (error) {
    console.error("Error updating image:", error);
    res.status(500).json({ message: "Failed to update image", error });
  }
};

const deleteImageHandler = async (req, res) => {
  try {
    const { id } = req.params;
    user = req.user;

    const allowedRoles = ['admin', 'editor', 'author'];
    
    if (!user ||  !allowedRoles.includes(user.role)) {
      return res.status(401).json({ message: "User is not authenticated" });
    }
    const image = await Image.findById(id);

    if (!image) return res.status(404).json({ message: "Image not found" });

    // Delete from Firebase Storage
    const filename = image.fileName;

    const removeImageFromFirebase = await deleteImageFromFirebase(filename);

    if (removeImageFromFirebase == false) {
      return res
        .status(401)
        .json({ message: "could not delete image from firebase" });
    }

    // Remove from MongoDB
    await image.deleteOne();
    res.status(200).json({ message: "Image deleted successfully" });
  } catch (error) {
    console.error("Error deleting image:", error);
    res.status(500).json({ message: "Failed to delete image", error });
  }
};

module.exports = {
  uploadImageHandler,
  getAllImageHandler,
  getImageHandler,
  updateImageHandler,
  deleteImageHandler,
};
// async function downloadFile(fileName, destination) {
//   const file = bucket.file(fileName);
//   await file.download({ destination });
//   console.log(`Downloaded ${fileName} to ${destination}`);
// }

// // Delete an Image
// async function deleteFile(fileName) {
//   await bucket.file(fileName).delete();
//   console.log(`Deleted ${fileName}`);
// }
