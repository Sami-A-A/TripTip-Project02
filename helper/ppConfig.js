const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;
const User = require("../models/User");


//Serialize Function
//saving data to the session
//id is a unique identifier
passport.serializeUser(function(user,done){
    done(null,user.id);
});

//deserialize function
//reading the function from the database accourding to user id from session 
passport.deserializeUser(function(id,done){
    User.findById(id, function(err,user){
        done(err, user);
    });
});

passport.use(new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
},
    function(email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

// exports
module.exports = passport;