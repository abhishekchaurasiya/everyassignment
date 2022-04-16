const mongoose = require('mongoose');

const authorModelSchema = new mongoose.Schema({

    authorName: String,
    age: Number,
    address: String,
    rating: Number

}, { timestamps: true });


let authorModel = mongoose.model("NewAuthor", authorModelSchema);

module.exports = authorModel;