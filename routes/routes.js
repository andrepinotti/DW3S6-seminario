const express = require("express");
const router = express.Router();

const appLogin = require("../login/controller/ctlLogin.js");

router.use((req, res, next) => {
    next();
});

router.get("/", (req, res) => {
    res.send("Hello World!");
})

router.post("/Login", appLogin.Login);
router.post("/Logout", appLogin.Logout);


module.exports = router;