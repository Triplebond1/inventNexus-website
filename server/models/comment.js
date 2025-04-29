const mongoose = require("mongoose");


const commentSchema = new mongoose.Schema(
  {
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    parentCommentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment",
      default: null,
    },
    content: { type: String, required: true, maxlength: 1000 },
    likes: [{ type: mongoose.Schema.Types.ObjectId, ref: "CommentLike" }],
    status: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },
    createdAt: { type: Date },
    updatedAt: { type: Date },
  },
  { _id: true,  timestamps: true}
);

const postCommentSchema = new mongoose.Schema(
  {
    postId: { type: mongoose.Schema.Types.ObjectId, ref: "Post", required: true },
    commentList: [commentSchema],
    commentCount: { type: Number, default: 0 },
  },
  { timestamps: true }
);

const PostComment = mongoose.model(
  "PostComment",
  postCommentSchema
);
module.exports = PostComment;
