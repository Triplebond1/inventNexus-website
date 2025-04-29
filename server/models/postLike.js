const mongoose = require("mongoose");

const postLikeSchema = new mongoose.Schema(
    {
        post: { 
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Post", 
            required: true,
            index: true // Index for faster queries
        },
        likeList: [
            {
                user: { 
                    type: mongoose.Schema.Types.ObjectId, 
                    ref: "User", 
                    required: true,
                    index: true // Index for faster user-based lookups
                },
                status: {
                    type: String,
                    enum: ["like", "dislike"],
                    default: "like",
                    required: true
                }
            }
        ],
        likeCount: { type: Number, default: 0 },
        dislikeCount: { type: Number, default: 0 }
    },
    { timestamps: true }
);

// Ensure a user can only like/dislike a post once
postLikeSchema.index({ post: 1, "likeList.user": 1 }, { unique: true });

const PostLike = mongoose.model("Like", postLikeSchema);
module.exports = PostLike;
