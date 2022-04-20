let mongoose = require("mongoose");


let basicModelSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    address: String,
    percentage: Number,
}, { timestamps: true });

module.exports = mongoose.model("Basic", basicModelSchema);

