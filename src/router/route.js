const express = require('express');

const router = express.Router();


const { createUsers, loginUser, getUsers,deleteUser, myPostMessage } = require("../controllers/usercontroller");
const updated = require("../controllers/usercontroller")
const midWare = require("../middleware/auth")


router.post("/createusers", createUsers);

router.post("/login", loginUser);

router.get("/getusers/:userId", getUsers);

router.post("/getusers/:userId/posts", myPostMessage);

router.put("/updateuser/:userId",  updated.updateUsers);

router.delete("/deleteuser/:userId", deleteUser)





module.exports = router;