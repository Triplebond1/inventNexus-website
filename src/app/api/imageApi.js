const axios = require("axios");
const dotenv = require("dotenv");
const FormData = require("form-data");
dotenv.config();

const Url = `${process.env.INVENT_NEXUS_API}/images`;

export const uploadImage = async (
  file,
  altText,
  title,
  description,
  keywords
) => {
  if (!file) return { success: false, message: "File is required" };

  const url = `${Url}/upload`;
  const formData = new FormData();
  formData.append("file", file);
  formData.append("altText", altText);
  formData.append("title", title);
  formData.append("description", description);
  formData.append("keywords", keywords);

  try {
    const response = await axios.post(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, message: "Failed to upload image" };
    }
  } catch (error) {
    console.error(
      "Error in POST request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getImage = async (imageId) => {
  if (!imageId) {
    return { success: false, message: "Image ID is required" };
  }

  const url = `${Url}/${imageId}`;

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, message: "Failed to retrieve image" };
    }
  } catch (error) {
    console.error(
      "Error in GET request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const getAllImage = async () => {
  const url = `${Url}`;

  try {
    const response = await axios.get(url);
    if (response.status === 200) {
      return { success: true, data: response.data };
    } else {
      return { success: false, message: "Failed to retrieve images" };
    }
  } catch (error) {
    console.error(
      "Error in GET request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const updateImage = async (
  imageId,
  title,
  description,
  altText,
  keywords
) => {
  if (!imageId) return { success: false, message: "Image ID is required" };

  const url = `${Url}/${imageId}`;
  const formData = new FormData();
  formData.append("title", title);
  formData.append("description", description);
  formData.append("altText", altText);
  formData.append("keywords", keywords);

  try {
    const response = await axios.put(url, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.status === 200
      ? { success: true, data: response.data }
      : { success: false, message: "Failed to update image" };
  } catch (error) {
    console.error(
      "Error in PUT request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};

export const deleteImage = async (ImageId) => {
  if (!ImageId) return { success: false, message: "Image ID is required" };

  const url = `${Url}/${ImageId}`;

  try {
    const response = await axios.delete(url);
    return response.status === 200
      ? { success: true, message: "Image deleted successfully" }
      : { success: false, message: "Failed to delete image" };
  } catch (error) {
    console.error(
      "Error in DELETE request:",
      error.response?.data || error.message
    );
    return { success: false, message: error.message };
  }
};
