const User = require("../models/User")
const bcrypt = require("bcrypt")
const salt = 10

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

exports.profile_changepass_get = (req,res) => {
    User.find({username: req.params.id})
    .then(user => {
        res.render("profile/changepass", {user: user[0]})
    })
    .catch(err => {
        console.log(err)
    })
}

exports.profile_changepass_put = (req,res) => {
        let hash = bcrypt.hashSync(req.body.password, salt);
        console.log(req.body.id)
        User.findByIdAndUpdate(req.body.id, {password: hash})
        .then((user) => {
            res.redirect(`/profile/${user.username}`)
        })
        .catch(err => {
            console.log(err)
            res.send('error');
        });
}
