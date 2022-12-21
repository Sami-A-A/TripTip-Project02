const Comment = require("../models/Comment");
const Post = require("../models/Post");
const User = require("../models/User");

exports.comment_show_get = async (req, res) => {
  const post = await Post.findById(req.body.id);
  res.render("home/posts", { post });
};

exports.comment_show_post = async (req, res) => {
  const post = await Post.findById(req.body.id);
  const user = await User.findById(req.user.id);
  const comment = new Comment({
    text: req.body.text,
    user: user,
    post: post,
  });
  await comment.save();
  res.redirect(`/post/${post.id}`);
};
