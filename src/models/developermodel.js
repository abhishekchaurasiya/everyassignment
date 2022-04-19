let mongoose = require("mongoose");


let developersModelSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    percentage: Number,
}, { timestamps: true });

module.exports = mongoose.model("Developer", developersModelSchema);

