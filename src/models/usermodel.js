const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        required: true
    },
    emailId: String,
    password: String,
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    age: Number,
    post: {
        type: [],
        default: []
    }
}, { timestamps: true });

let userModle = mongoose.model("User", userSchema); //users
module.exports = userModle;