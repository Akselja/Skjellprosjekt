// imports
const { Router } = require("express");
const controller = require("../controllers/controller");

// router
const router = Router();

// routes
router.get("/", controller.goof_get);

router.post("/signup", controller.signup_post);

router.post("/login", controller.login_post);

// 404
router.use(controller.error404);

module.exports = router;