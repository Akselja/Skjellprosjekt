// imports
const { Router } = require("express");
const controller = require("../controllers/controller");

// router
const router = Router();

// routes
    //get   
router.get("/", controller.goof_get);

router.get("/signup", controller.signup_get);

router.get("/login", controller.login_get);

router.get("/delete", controller.delete_get);

router.get("/update-email", controller.change_email_get);

router.get("/hilsen", controller.hilsen_fra_js_get);

    // post
router.post("/signup", controller.signup_post);

router.post("/login", controller.login_post);

router.post("/delete", controller.delete_post);

router.post("/update-email", controller.change_email_post);

    // 404
router.use(controller.error404);

// export
module.exports = router;