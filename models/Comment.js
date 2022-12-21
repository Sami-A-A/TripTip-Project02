const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
  {
    text: {
      type: String,
      trim: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      ref: "User"
    },
    replies: [{
      type: String
    }]
  },
  { timestamps: true }
);


const Comment = mongoose.model("Comment", commentSchema)

module.exports = Comment;