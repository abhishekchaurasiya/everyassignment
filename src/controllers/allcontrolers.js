let basicCollection = require("../models/models")

let createUserData = async (req, res) => {
    let data = req.body;
    let saveData = await basicCollection.create(data);
    res.send({ message: saveData })
}


let getUserData = async (req, res) => {
    let saveData = await basicCollection.find({ percentage: { $gt: 80 }, gender: ["male", "female"] }).select({ firstName: 1, percentage: 1, _id: 0 });
    res.send({ message: saveData })
}




module.exports = { createUserData, getUserData };