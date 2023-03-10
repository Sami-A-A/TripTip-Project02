const express = require('express');
const router = express.Router();
const isLoggedIn = require('../helper/isLoggedIn')
const postCtrl = require("../controllers/posts")

// let methodOverride = require("method-override");
// router.use(methodOverride('_method'))

// Creating Posts
router.get("/post/add",isLoggedIn, postCtrl.post_create_get)
router.post("/post/add",isLoggedIn, postCtrl.post_create_post)

// Reading Posts
router.get("/post/index", postCtrl.post_index_get)
router.get("/post/detail/:id", postCtrl.post_details_get)

// Updating Posts
router.get("/post/edit/:id",isLoggedIn, postCtrl.post_edit_get)
router.post("/post/update",isLoggedIn, postCtrl.post_update_put)

// Deleting Posts
router.get("/post/delete/:id",isLoggedIn, postCtrl.post_delete_get)

// Reading Posts with search
router.post("/post/search", postCtrl.post_search_post);



module.exports = router;