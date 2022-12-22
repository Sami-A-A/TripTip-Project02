const express = require('express');
const router = express.Router();
const isLogedIn = require('../helper/isLoggedIn')
const profileCtrl = require('../controllers/profile');

// let methodOverride = require("method-override");
// router.use(methodOverride('_method'))

//Read Profile
router.get("/profile/:id",isLogedIn, profileCtrl.profile_details_get);

//Edit Profile
router.get("/profile/edit/:id",isLogedIn, profileCtrl.profile_edit_get);
router.post("/profile/update",isLogedIn, profileCtrl.profile_update_put);

//change pass
router.get("/profile/changepass/:id",isLogedIn, profileCtrl.profile_changepass_get);
router.get("/profile/update",isLogedIn, profileCtrl.profile_changepass_put);

module.exports = router;