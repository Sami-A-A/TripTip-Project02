const router = require('express').Router();

const commentCtrl = require('../controllers/comment');

router.get("/post/comment/", commentCtrl.comment_show_get);
router.post("/post/comment/", commentCtrl.comment_show_post);

module.exports = router;