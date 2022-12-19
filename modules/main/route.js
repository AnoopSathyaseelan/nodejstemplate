const express = require("express")
const router = express.Router();
const {
    test
} = require("./controller")
const {
    authenticateToken
} = require("../../middlewares/authmiddleware")

//all the routes and middleware defined here
router.get("/test", authenticateToken, test)

module.exports = router;