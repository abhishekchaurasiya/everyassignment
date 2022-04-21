const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
    name: String,
    balance: Number, // Default balance at user registration is 100
    address: String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"]
    },
    isFreeAppUser: Boolean
}, { timestamps: true })

let userModle = mongoose.model("User", userSchema);
module.exports= userModle