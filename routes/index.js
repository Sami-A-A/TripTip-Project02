const router = require("express").Router();

const indexCtrl = require("../controllers/index");

// Home page from the index controller
router.get("/", indexCtrl.index_show_get); 

module.exports = router;