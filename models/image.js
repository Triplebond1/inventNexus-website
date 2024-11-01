
const mongoose = require("mongoose");

const imageSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    originalName: {
      type: String,
      required: true,
      trim: true,
      maxlength: 200,
    },

    url: {
      type: String,
      required: true,
      trim: true,
    },

    altText: {
      type: String,
      trim: true,
      maxlength: 150,
    },

    title: {
      type: String,
      trim: true,
      maxlength: 100,
      default: "",
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },

    size: {
      type: Number, // Size in bytes
      required: true,
    },

    format: {
      type: String, // e.g., jpg, png, gif
      required: true,
    },

    width: {
      type: Number, // Width in pixels
      default: null,
    },

    height: {
      type: Number, // Height in pixels
      default: null,
    },

    thumbnailUrl: {
      type: String,
      trim: true,
      default: "",
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    keywords: [
      {
        type: String,
        trim: true,
        lowercase: true,
      },
    ],

    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Image = mongoose.model("Image", imageSchema);
module.exports = Image;
