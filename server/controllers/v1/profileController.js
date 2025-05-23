const Profile = require("../../models/profile");
const { validateField } = require("../../utilities/helpers/validateField");

// @desc    Create a new profile
// @route   POST /v1/api/profiles
// @access  Private
const createProfileHandler = async (req, res) => {
  try {
    const {
      website,
      inventnexusPage,
      location,
      social = { twitter, facebook, instagram, linkedin },
      bio,
    } = req.body;
    const user = req.user;
    const userId = user._id;

    if (!user) {
      return res.status(401).json({ message: "User is not authenticated" });
    }

    validateField(website, "Website", "string");
    validateField(inventnexusPage, "inventnexus page", "string");
    validateField(location, "location", "stirng");
    validateField(bio, "Bio", "string");
    validateField(social.twitter, "twitter", "string");
    validateField(social.facebook, "facebook", "string");
    validateField(social.instagram, "instagram", "string");
    validateField(social.linkedin, "linkedin", "string");

    // Check if profile already exists for the user
    const existingProfile = await Profile.findOne({ userEmail: userId });
    if (existingProfile) {
      return res.status(400).json({ message: "Profile already exists." });
    }

    if (user.role === "subscriber") {
      return res
        .status(403)
        .json({ message: "You are not authorized to create a profile." });
    }

    // Create a new profile
    const newProfile = new Profile({
      userName: userId, // Set userId reference for username
      userEmail: userId,
      userRole: userId,
      profilePicture: userId,
      website: website || null,
      inventnexusPage: inventnexusPage || null,
      location: location || null,
      social: {
        twitter: social.twitter ? social.twitter : null,
        facebook: social.facebook ? social.facebook : null,
        instagram: social.instagram ? social.instagram : null,
        linkedin: social.linkedin ? social.linkedin : null,
      },
      bio: bio || null,
    });

    await newProfile.save();

    res.status(201).json({
      message: "Profile created successfully.",
      profile: newProfile.toJSON(),
    });
  } catch (error) {
    console.error("Error creating profile:", error);
    res
      .status(500)
      .json({ message: "Error creating profile", error: error.message });
  }
};

// @desc    Get all profiles or a specific profile by ID
// @route   GET /v1/api/profiles/:id?
// @access  Public
const getProfileHandler = async (req, res) => {
  try {
    const { id } = req.params;

    let profile;
    if (id) {
      profile = await Profile.findById(id)
        .populate("userName", "username")
        .populate("userEmail", "email")
        .populate("userRole", "role")
        .populate("profilePicture", "profilePicture");

      if (!profile) {
        return res.status(404).json({ message: "Profile not found" });
      }
    } else {
      const user = req.user;
      if (!user.role == admin) {
        return res.status(404).json({ message: "you are not authorized" });
      }
      profile = await Profile.find()
        .populate("userName", "username")
        .populate("userEmail", "email")
        .populate("userRole", "role")
        .populate("profilePicture", "profilePicture");
    }

    res.status(200).json({ profile });
  } catch (error) {
    console.error("Error fetching profiles:", error);
    res.status(500).json({ message: "Error fetching profiles", error });
  }
};

// @desc    Update a profile
// @route   PUT /v1/api/profiles/:id
// @access  Private
const updateProfileHandler = async (req, res) => {
  try {
    const { id } = req.params;
    let {
      website,
      inventnexusPage,
      location,
      social = { twitter, facebook, instagram, linkedin },
      bio,
    } = req.body;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "User is not authenticated" });
    }

    validateField(website, "Website", "string");
    validateField(inventnexusPage, "inventnexus page", "string");
    validateField(location, "location", "stirng");
    validateField(bio, "Bio", "string");
    validateField(social.twitter, "twitter", "string");
    validateField(social.facebook, "facebook", "string");
    validateField(social.instagram, "instagram", "string");
    validateField(social.linkedin, "linkedin", "string");

    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }

    // Authorization check (Assuming user is authenticated and has their `id` in `req.user._id`)
    if (
      profile.userName.toString() !== user._id.toString() ||
      user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "You are not authorized to update this profile." });
    }

    // Update fields if provided
    profile.profilePicture = profilePicture || profile.profilePicture;
    profile.website = website || profile.website;
    profile.inventnexusPage = inventnexusPage || profile.inventnexusPage;
    profile.location = location || profile.location;
    profile.social = {
      twitter: social.twitter ? social.twitter : profile.social.twitter,
      facebook: social.facebook ? social.facebook : profile.social.facebook,
      instagram: social.instagram ? social.instagram : profile.social.instagram,
      linkedin: social.linkedin ? social.linkedin : profile.social.linkedin,
    };
    profile.bio = bio || profile.bio;

    await profile.save();

    res.status(200).json({
      message: "Profile updated successfully",
      profile: profile.toJSON(),
    });
  } catch (error) {
    console.error("Error updating profile:", error);
    res.status(500).json({ message: "Error updating profile", error });
  }
};

// @desc    Delete a profile
// @route   DELETE /v1/api/profiles/:id
// @access  Private (admin, and profile owner)
const deleteProfileHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const user = req.user;

    if (!user) {
      return res.status(401).json({ message: "User is not authenticated" });
    }

    const profile = await Profile.findById(id);
    if (!profile) {
      return res.status(404).json({ message: "Profile not found" });
    }
    // Authorization check (Assuming user is authenticated and has their `id` in `req.user._id`)
    if (
      profile.userName.toString() !== user._id.toString() ||
      user.role !== "admin"
    ) {
      return res
        .status(403)
        .json({ message: "You are not authorized to delete this profile." });
    }

    await profile.deleteOne();
    res.status(200).json({ message: "Profile deleted successfully" });
  } catch (error) {
    console.error("Error deleting profile:", error);
    res.status(500).json({ message: "Error deleting profile", error });
  }
};

module.exports = {
  createProfileHandler,
  getProfileHandler,
  updateProfileHandler,
  deleteProfileHandler,
};
