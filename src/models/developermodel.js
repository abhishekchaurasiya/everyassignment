let mongoose = require("mongoose");
let ObjectId = mongoose.Schema.Types.ObjectId;


let developersModelSchema = new mongoose.Schema({
    name: String,
    gender: {
        type: String,
        enum: ["male", "female", "others"]
    },
    percentage: Number,
    batch: {
        type: ObjectId,
        ref: "Batche"
    }

}, { timestamps: true });

module.exports = mongoose.model("Developer", developersModelSchema);

