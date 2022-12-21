const express = require("express");
const mongoose = require("mongoose");

require("dotenv").config();

// The link for our app's port (don't worry guys it works!!)
const port = process.env.PORT;

const app = express();
app.use(express.static("public"));
// Link to the layout.ejs file (don't worry guys it works!!). Also for us to use ejs is the "view engine" part. (DO NOT REMOVE ANY OF THESE COMMENTS UNTIL WE FINISH THE PROJECT, K THNX!! -Feras ❤️)
const expressLayouts = require("express-ejs-layouts");
app.use (expressLayouts);
app.set("view engine", "ejs");

//express session and passport - Nusaiba
let session = require('express-session');
let passport = require('./helper/ppConfig');

app.use(session({
    secret: process.env.SECRET,
    saveUninitialized: true,
    resave: false,
    cookie: {maxAge: 36000000}
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(function(req,res,next) {
    res.locals.currentUser = req.user;
    next();
});

// Routes :D
const indexRoute = require("./routes/index");
const userRoute = require("./routes/auth");
const commentCtrl = require("./routes/comment");
const postRoute = require("./routes/posts")
const profileRoute = require("./routes/profile")



//  Mounting the routes ;)
app.use("/", indexRoute);
app.use("/",userRoute);
app.use("/",commentCtrl);
app.use("/", postRoute);
app.use("/", profileRoute)



// Connection to MongoDB (don't worry guys it works!!)
mongoose.set("strictQuery", false);
mongoose.connect(process.env.mongoDBURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB Connected to Trip Tip"))
    .catch(err => console.log(err));

// Middleware 
app.use(express.json());

// This is for the form data to be able to be read by the server (don't worry guys it works!!)
app.use(express.urlencoded({ extended: false }));

//  This the listen function for our port and as an idicator that it's actully connected!!
app.listen(port, () => {
    console.log(`Server is walking on port: ${port}`);
});