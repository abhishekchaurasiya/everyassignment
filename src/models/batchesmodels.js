let mongoose = require("mongoose");

let batchModelSchema = new mongoose.Schema({
    name: String,
    size: Number,
    program: {
        type: String,
        enum: ["backend", "frontEnd"]
    }

}, { timestamps: true });

module.exports = mongoose.model("Batche", batchModelSchema);
