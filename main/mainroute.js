const express= require("express")
const router = express.Router();
const controller= require("./maincontroller")

//all the routes and middleware defined here
router.get("/test", controller.test)

module.exports = router;