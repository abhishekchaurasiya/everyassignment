const express = require('express');

const router = express.Router();

const { createUserData, getUserData } = require("../controllers/allcontrolers")


router.post("/createuser", createUserData);

router.get("/getuser", getUserData);






module.exports = router;