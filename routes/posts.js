const express = require('express');
const router = express.Router();

const postCtrl = require("../controllers/posts")

// let methodOverride = require("method-override");
// router.use(methodOverride('_method'))

// Creating Posts
router.get("/post/add", postCtrl.post_create_get),
router.post("/post/add", postCtrl.post_create_post),

// Reading Posts
router.get("/post/index", postCtrl.post_index_get),
router.get("/post/detail/:id", postCtrl.post_details_get)

// Updating Posts
router.get("/post/edit/:id", postCtrl.post_edit_get),
router.post("/post/update", postCtrl.post_update_put),

// Deleting Posts
router.get("/post/delete/:id", postCtrl.post_delete_get)



module.exports = router;