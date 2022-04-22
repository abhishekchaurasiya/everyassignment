const express = require('express');

const router = express.Router();


const { createUsers, loginUser, getUsers, updateUsers, deleteUser } = require("../controllers/usercontroller");


router.post("/createusers", createUsers);

router.post("/login", loginUser);

router.get("/getusers/:userId", getUsers);

router.put("/updateuser/:userId", updateUsers);

router.delete("/deleteuser/:userId", deleteUser)





module.exports = router;