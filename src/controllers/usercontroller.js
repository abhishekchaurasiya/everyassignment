let userModle = require("../models/usermodel");
let jwt = require("jsonwebtoken");
const { all } = require("../router/route");

let createUsers = async (req, res) => {
    let data = req.body;
    let saveData = await userModle.create(data);
    res.send({ message: saveData });
}

let loginUser = async (req, res) => {
    let username = req.body.emailId;
    let password = req.body.password;

    let userDetails = await userModle.findOne({ emailId: username, password: password });
    if (!userDetails) {
        return res.send({ message: "your username and password is not correct", status: true })
    }
    let token = jwt.sign({
        userId: userDetails._id.toString(),
        batch: "block chain",
        organization: "abhigruop"
    }, "abhishek-coder");

    res.setHeader("x-auth-token", token);
    res.send({ message: token, status: true });
}

let getUsers = async (req, res) => {
    let token = req.headers["x-Auth-toke"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ message: "token must be present", status: true });
    console.log(token);

    let incodedToken = jwt.verify(token, "abhishek-coder");
    if (!incodedToken)
        return res.send({ status: false, message: "token is invalid" });

    let userId = req.params.userId;
    let userDetails = await userModle.findById(userId);
    console.log(userDetails);
    if (!userDetails)
        return res.send({ status: false, message: "No such user exists" });

    res.send({ status: true, data: userDetails })

};


let updateUsers = async (req, res) => {


    let userId = req.params.userId;

    let token = req.headers["x-Auth-toke"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ message: "token must be present", status: true });
    console.log(token);

    let user = await userModle.findById(userId);
    if (!user) {
        return res.send("No such user exists");
    }

    let userData = req.body;
    let updatedUser = await userModle.findOneAndUpdate(
        { _id: userId },
        { $set: userData },
        { new: true },
    );
    res.send({ status: true, data: updatedUser });

}


const deleteUser = async function (req, res) {

    let token = req.headers["x-Auth-toke"];
    if (!token) token = req.headers["x-auth-token"];

    if (!token) return res.send({ message: "token must be present", status: true });
    console.log(token);

    let userId = req.params.userId;
    let user = await userModle.findOneAndUpdate(
        { _id: userId },
        { $set: { isDeleted: true } },
        { new: true }
    )

    res.send({ status: true, data: user });
}

module.exports = { createUsers, loginUser, getUsers, updateUsers, deleteUser };