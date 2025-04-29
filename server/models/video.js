const mongoose = require("mongoose");


const videoSchema = new mongoose.Schema (
  {
    fileName: { type: String, required: true, trim: true, maxlength: 200 },
    originalName: { type: String, required: true, trim: true, maxlength: 200 },
    url: { type: String, required: true, trim: true },
    altText: { type: String, trim: true, maxlength: 150 },
    title: { type: String, trim: true, maxlength: 100, default: "" },
    description: { type: String, trim: true, maxlength: 500, default: "" },
    size: { type: Number, required: true },
    format: { type: String, required: true },
    width: { type: Number, default: null },
    height: { type: Number, default: null },
    thumbnailUrl: { type: String, trim: true, default: "" },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    keywords: [{ type: String, trim: true, lowercase: true }],
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model("Video", videoSchema);
module.exports = Video;
