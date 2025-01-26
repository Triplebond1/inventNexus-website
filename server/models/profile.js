const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      trim: true,
    },

    userName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    userEmail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    userRole: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    profilePicture: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    website: {
      type: String, //link to there website 
      trim: true,
      default: "",
    },

    inventnexusPage: {
      type: String, // link to a dedicated page on inventnexus
      trim: true,
      default: "",
    },

    location: {
      type: String,
      trim: true,
      default: "",
    },

    social: {
      twitter: {
        type: String,
        trim: true,
        default: "",
      },

      facebook: {
        type: String,
        trim: true,
        default: "",
      },

      linkedin: {
        type: String,
        trim: true,
        default: "",
      },

      instagram: {
        type: String,
        trim: true,
        default: "",
      },
    },

    bio: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;
