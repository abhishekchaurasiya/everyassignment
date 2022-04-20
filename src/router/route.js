const express = require('express');

const router = express.Router();

const { createUserData, getUserData } = require("../controllers/allcontrolers")
const { midware } = require("../middleware/middleware")

router.post("/createuser", createUserData);

router.get("/getuser", midware, getUserData);






module.exports = router;