
const jwt = require("jsonwebtoken");

const authUser = function (req, res, next) {
    let token = req.headers["x-Auth-token"];
    if (!token) {
        token = req.headers["x-auth-token"];
    }

    let tokens = jwt.sign({
        userId: userDetails._id.toString(),
        batch: "block chain",
        organization: "abhigruop"
    }, "abhishek-coder");

    if (!token) {
        return res.send({ status: false, msg: "Token must be present" });
    }

    let verifyUser = jwt.verify(tokens, "abhishek-coder");

    if (!verifyUser) {
        return res.send({ status: false, msg: "Token is incorrect" });
    }
    next();
}

module.exports.authUser = authUser;