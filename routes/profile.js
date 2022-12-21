const express = require('express');
const router = express.Router();

const profileCtrl = require('../controllers/profile');

// let methodOverride = require("method-override");
// router.use(methodOverride('_method'))

//Read Profile
router.get("/profile/:id", profileCtrl.profile_details_get);

//Edit Profile
router.get("/profile/edit/:id", profileCtrl.profile_edit_get);
router.post("/profile/update", profileCtrl.profile_update_put);

module.exports = router;