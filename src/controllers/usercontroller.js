let userModle = require("../models/usermodel");
let jwt = require("jsonwebtoken");


let createUsers = async (req, res) => {

    try {
        let data = req.body;
        if (Object.keys(data).length != 0) {
            let saveData = await userModle.create(data);
            res.status(201).send({ message: saveData });

        } else {
            res.status(401).send({ message: "Bad Request" })
        }

    } catch (error) {
        // console.log("This is the error :", err.message)
        res.status(500).send({ msg: "Error", error: err.message })
    }

}

let loginUser = async (req, res) => {
    try {

        let username = req.body.emailId;
        let password = req.body.password;

        let userDetails = await userModle.findOne({ emailId: username, password: password });
        if (!userDetails) {
            return res.status(400).send({ message: "your username and password is not correct", status: true })
        }

        let token = jwt.sign({
            userId: userDetails._id.toString(),
            batch: "block chain",
            organization: "abhigruop"
        }, "abhishek-coder");

        res.setHeader("x-auth-token", token);
        res.status(201).send({ message: token, status: true });
    }
    catch (error) {
        res.status(500).send({ msg: "Error", error: err.message })
    }

}

let getUsers = async (req, res) => {
    try {

        let token = req.headers["x-Auth-token"];

        if (!token) token = req.headers["x-auth-token"];

        if (!token) return res.status(400).send({ message: "token must be present", status: true });
        // console.log(token);

        let incodedToken = jwt.verify(token, "abhishek-coder");
        if (!incodedToken)
            return res.status(400).send({ status: false, message: "token is invalid" });

        let userId = req.params.userId;
        let userDetails = await userModle.findById(userId);
        // console.log(userDetails);
        if (!userDetails)
            return res.status(400).send({ status: false, message: "No such user exists" });

        res.status(201).send({ status: true, data: userDetails });
    }
    catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })

    }

};


const updateUsers = async function (req, res) {
    try {
        let token = req.headers["x-Auth-token"];

        if (!token) token = req.headers["x-auth-token"];

        if (!token) return res.status(400).send({ message: "token must be present", status: true });

        let userId = req.params.userId;
        let user = await userModle.findById(userId);
        console.log(user);

        if (!user) {
            return res.status(400).send("No such user exists");
        }

        let userData = req.body;
        let updatedUser = await userModle.findOneAndUpdate(
            { _id: userId },
            { $set: userData },
            { new: true },
        );
        res.status(201).send({ status: true, data: updatedUser });
    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message })

    }


};


const deleteUser = async function (req, res) {

    try {
        let token = req.headers["x-Auth-toke"];
        if (!token) token = req.headers["x-auth-token"];

        if (!token) return res.status(400).send({ message: "token must be present", status: true });
        // console.log(token);

        let userId = req.params.userId;
        let user = await userModle.findOneAndUpdate(
            { _id: userId },
            { $set: { isDeleted: true } },
            { new: true }
        )

        res.status(201).send({ status: true, data: user });

    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message });
    }

}

let myPostMessage = async (req, res) => {

    try {
        let message = req.body.message


        let token = req.headers["x-auth-token"]
        if (!token) return res.status(400).send({ status: false, msg: "token must be present in the request header" })
        let decodedToken = jwt.verify(token, 'abhishek-coder')

        if (!decodedToken) return res.status(400).send({ status: false, msg: "token is not valid" })

        //userId for which the request is made. In this case message to be posted.
        let userToBeModified = req.params.userId;
        //userId for the logged-in user
        let userLoggedIn = decodedToken.userId;

        //userId comparision to check if the logged-in user is requesting for their own data
        if (userToBeModified != userLoggedIn) {
            return res.status(400).send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })
        }

        let user = await userModle.findById(req.params.userId)
        if (!user) return res.status(400).send({ status: false, msg: 'No such user exists' })

        let updatedPosts = user.posts;
        //add the message to user's posts
        updatedPosts.push(message)
        let updatedUser = await userModle.findOneAndUpdate({ _id: user._id }, { posts: updatedPosts }, { new: true })

        //return the updated user document
        return res.status(201).send({ status: true, data: updatedUser })

    } catch (error) {
        res.status(500).send({ msg: "Error", error: error.message });
    }

}



module.exports = { createUsers, loginUser, getUsers, deleteUser, myPostMessage };
module.exports.updateUsers = updateUsers