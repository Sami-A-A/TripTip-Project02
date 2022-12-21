const mongoose = require('mongoose');
 const bcrypt = require('bcrypt');

 //user schema
 const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3,"first name should be 5 characters min"],
        maxlength: [30, "first name should be 15 characters max"]
    },
    lastName: {
        type: String,
        required: true,
        minlength: [3,"last name should be 5 characters min"],
        maxlength: [30, "last name should be 15 characters max"]

    },
    email:{
        type: String,
        required: true
    },
    username: {
        type:String,
        required: true,
        unique: true,
        minlength: [5,"username should be 5 characters min"],
        maxlength: [15, "username should be 15 characters max"]
    },
    password: {
        type: String,
        required: true,
        minlength: [8,"password needs to be 8 characters or more"],
        maxlength: [1500, "password can't be more than 15 characters"]
    },
    aboutMe: {
        type: String,
        required: false
    },
    age: {
        type: Number,
        required: false
    },
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }]
    // ,
    // Country:{
    //     type: String,
    // }

 },{
    timestamps: true
 });

 userSchema.methods.verifyPassword = function(password){
    console.log(password);
    console.log(this.password);
    return bcrypt.compareSync(password,this.password);
 }

 const User = mongoose.model("User", userSchema);

 module.exports = User;