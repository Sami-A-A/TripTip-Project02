const post = require("../models/Post");
const Comment = require("../models/comment");


// exports.modules.checkCommentOwnership = function(req, res, next){
//     //is user logged in
//     //otherwise, redirect
//     //if not, redirect 
//     if(req.isAuthenticated()){
//         Comment.findById(req.params.comment_id, function(err, foundComment){
//         if(err){
//             res.redirect("/post");
//         } else{
//             //does user own the post?
//             if(foundComment.user.id.equals(req.user._id)){
//                  next(); //move on to the code of edit/update/delete 
//             } else{
//                 req.flash("error", "You don't have permission to do that!");
//                 res.redirect("back");
//             }
//         }
//         });
//     } else{
//         req.flash("error", "You need to be logged in to do that");
//         res.redirect("back"); //take user to previous where they were  
//     }
// }

module.exports.isLoggedIn = function(req, res, next){
    //add middleware: isLoggedIn()
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You need to be logged in to do that"); //key: error, value: Please ...
    res.redirect("/login");
}

// module.exports = middlewareObj;