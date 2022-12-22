const express = require('express');
const router = express.Router();
const isLoggedIn = require('../helper/isLoggedIn')
const profileCtrl = require('../controllers/profile');

// let methodOverride = require("method-override");
// router.use(methodOverride('_method'))

//Read Profile
router.get("/profile/:id",isLoggedIn, profileCtrl.profile_details_get);

//Edit Profile
router.get("/profile/edit/:id",isLoggedIn, profileCtrl.profile_edit_get);
router.post("/profile/update",isLoggedIn, profileCtrl.profile_update_put);

//change pass
router.get("/profile/changepass/:id",isLoggedIn, profileCtrl.profile_changepass_get);
router.post("/profile/updatepass",isLoggedIn, profileCtrl.profile_changepass_put);

module.exports = router;