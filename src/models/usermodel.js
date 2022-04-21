const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    balance: {
        type: Number,
        default: 100
    }, // Default balance at user registration is 100
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

let userModle = mongoose.model("User", userSchema);
module.exports = userModle;