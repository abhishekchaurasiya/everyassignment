const express = require('express');

const router = express.Router();

const { createUserData, getUserData } = require("../controllers/allcontrolers")
const { midware } = require("../middleware/middleware");

router.post("/createuser", midware, createUserData);

router.get("/getuser", getUserData);






module.exports = router;