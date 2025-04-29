const mongoose = require("mongoose");

const commentLikeSchema = new mongoose.Schema(
  {
    comment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      required: true,
      index: true, // Index for faster queries
    },
    likeList: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
          index: true, // Index for faster user-based lookups
        },
        status: {
          type: String,
          enum: ["like", "dislike"],
          default: "like",
          required: true,
        },
      },
    ],
    likeCount: { type: Number, default: 0 },
    dislikeCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

// Ensure a user can only like/dislike a post once
commentLikeSchema.index({ post: 1, "likeList.user": 1 }, { unique: true });

const CommentLike = mongoose.model("CommentLike", commentLikeSchema);
module.exports = CommentLike;
