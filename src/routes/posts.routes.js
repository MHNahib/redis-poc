const { Router } = require("express");
const { getAllPostsController } = require("../controllers");
const router = Router();

router.get("/", getAllPostsController);

module.exports = router;
