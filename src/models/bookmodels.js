const mongoose = require("mongoose");

let BookUserSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true
    },
    price: {
        indianPrice: String,
        unitedStatePrice: String
    },
    year: {
        type: Number,
        default: 2021
    },
    tags: ["biography", "horror", "nationalism", "Mystery", "Historical Fiction", "Romance", "freedom fighters", "programming"],
    authorName: String,
    totalPage: Number,
    stcokAvailable: Boolean
}, { timestamps: true });

let bookModelSchema = mongoose.model("BookModel", BookUserSchema);
module.exports = bookModelSchema;




