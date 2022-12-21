const mongoose = require("mongoose")

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
        
    },
    place: [{
        type: String,
        required: true
    }],
    content: {
        type: String,
        required: true
    },
    username: {
        type: String,
        ref: "User"
    },
    comments: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    }]

},{timestamps: true})

const Post = mongoose.model("Post", postSchema)

module.exports = Post