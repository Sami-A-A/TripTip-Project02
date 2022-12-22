const Post = require("../models/Post");
const User = require("../models/User");

const moment = require('moment');

// GET Rendering Post Add
exports.post_create_get = (req, res) => {
    res.render("post/add")
}

// CREATE new Post
exports.post_create_post = (req, res) => {
    let post = new Post(req.body)
    console.log("_____________________",req.body)
    post.save()
    .then(()=>{
        res.redirect("/post/index")
    })
    .catch((err) => {
        console.log(err)
        res.send("Please try again later")
    })
}

// GET Rendering Post Index Page
exports.post_index_get = (req, res) => {
    Post.find()
    .then(posts => {
        res.render("post/index", {posts, moment})
    })
    .catch(err => {
        console.log(err);
    })
}

// GET Rendering a Specific Post by ID
exports.post_details_get = (req, res) => {
    Post.find({_id:req.params.id})
    .then(posts => {
        res.render("post/read", {posts, moment})
    })
    .catch(err => {
        console.log(err)
    })
}

// GET Rendering Post Edit Page
exports.post_edit_get = (req, res) => {
    Post.findById(req.params.id)
    .then(post => {
        res.render("post/edit", {post})
    })
    .catch(err => {
        console.log(err)
    })
}

//PUT Updates the post
exports.post_update_put = (req, res) => {
    Post.findByIdAndUpdate(req.body.id, req.body)
    .then(() => {
        res.redirect("/post/index")
    })
    .catch(err => {
        console.log(err)
    })
}

// GET Delete post
exports.post_delete_get = (req,res) => {
    Post.findByIdAndDelete(req.params.id)
    .then(()=>{
        res.redirect("/post/index")
    })
    .catch(err=>{
        console.log(err)
    })
}

// GET Rendering Post Index Page
exports.post_search_post = (req, res) => {
    Post.find({country: req.body.country})
    .then(posts => {
        res.render("post/index", {posts, moment})
    })
    .catch(err => {
        console.log(err);
    })
}