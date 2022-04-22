const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: String,
    emailId: String,
    password : String,
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    age: Number
}, { timestamps: true });

let userModle = mongoose.model("User", userSchema); //users
module.exports = userModle;