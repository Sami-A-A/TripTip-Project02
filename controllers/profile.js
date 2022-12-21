const User = require("../models/User")


// GET Render profile
exports.profile_details_get = (req,res) => {
    User.find({username:req.params.id})
    .then(users => {
        res.render("profile/details", {users})
    })
    .catch(err =>{
        console.log(err)
    })
}

// GET Render edit profile
exports.profile_edit_get = (req,res) => {
    User.find({username: req.params.id})
    .then(user => {
        res.render("profile/edit", {user: user[0]})
    })
    .catch(err => {
        console.log(err)
    })
}

// PUT Update Profile
exports.profile_update_put = (req,res) => {
    User.findByIdAndUpdate(req.body.id, req.body)
    .then((user) => {
        res.redirect(`/profile/${user.username}`)
    })
    .catch(err => {
        console.log(err)
    })
}