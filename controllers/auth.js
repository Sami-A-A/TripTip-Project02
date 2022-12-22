const User = require('../models/User');
const bcrypt = require('bcrypt');
const salt = 10;
let passport = require('../helper/ppConfig');
const { nextTick } = require('process');

//API registration and authentication - Nusaiba

exports.auth_signup_get = (req,res) => {
    res.render("auth/signup");
}

exports.auth_signup_post = (req,res) => {
    console.log(req.body);
    let user = new User(req.body);
    let hash = bcrypt.hashSync(req.body.password, salt);
    console.log(hash);
    user.password = hash;

    user.save()
    .then( () => {
        res.redirect("/auth/signin");
    })
    .catch( err => {
        console.log(err);
        res.send("please try again later");
    });
}

exports.auth_signin_get = (req,res) => {
    res.render("auth/signin");
}

exports.auth_signin_post = passport.authenticate('local', {
    successRedirect: "/",
    failureRedirect: "/auth/signin" 
});

exports.auth_logout_get = (req,res) => {
    req.logout(function(err){
        if(err) return nextTick(err);
        res.redirect("/auth/signin");
    });
}





