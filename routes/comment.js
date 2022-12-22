const express = require("express");
const router = express.Router({mergeParams: true});
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const middleware = require("../middleware");


//          COMMENT ROUTES

router.get("/new", middleware.isLoggedIn, function(req, res) {
    // find post by id
    // console.log(req.params.id);
    post.findById(req.params.id, function(err, post){
        if(err){
            console.log(err);
        } else{
             res.render("comments/new", {post: post});
        }
    })
   
});

router.post("/", middleware.isLoggedIn, function(req, res){
    //lookup post using ID
    Post.findById(req.params.id, function(err, post) {
        if(err){
            console.log(err);
            res.redirect("/post");
        } else{
            //create new comment
            Comment.create(req.body.comment, function(err, comment){
                if(err){
                    req.flash("error", "Oops! Something went wrong...");
                    console.log(err);
                } else{
                    //add username and id of user to comment
                    comment.user.id = req.user._id;
                    comment.user.username = req.user.username;
                    //save comment
                    comment.save();
                    
                    console.log(comment);
                    //connect new comment to post
                    post.comments.push(comment);
                    post.save();
                     //redirect post show page
                     req.flash("success", "Successfully added comment");
                    res.redirect("/post/" + req.params.id);
                }
            });
        }
    });
});

//COMMENT EDIT ROUTE
//comment edit form
//posts/:id/comments/:comment_id/edit
router.get("/:comment_id/edit", middleware.isLoggedIn, function(req, res){
    //don't need Post.findById() to find post_id
    // already HAVE post_id in req.params.id
    Comment.findById(req.params.comment_id, function(err, foundComment) {
        if(err){
            res.redirect("back");
        } else{
            res.render("comments/edit", {post_id: req.params.id, comment: foundComment});
        }
    });
});

//comment update
router.put("/:comment_id", middleware.isLoggedIn, function(req, res){
    Comment.findByIdAndUpdate(req.params.comment_id, req.body.comment, function(err, updatedComment){
        if(err){
            res.redirect("back");
        } else{
            req.flash("success", "Your comment is updated successfully!");
            res.redirect("/post/" + req.params.id);
        }
    });
});

//COMMENT DELETE ROUTE
router.delete("/:comment_id", middleware.isLoggedIn, function(req, res){
    //findByIdAnd Remove
    Comment.findByIdAndRemove(req.params.comment_id, function(err){
       if(err){
           res.redirect("back");
       } else{
           req.flash("success", "Your comment is deleted!");
           res.redirect("/post/" + req.params.id);
       }
    });
});

module.exports = router;