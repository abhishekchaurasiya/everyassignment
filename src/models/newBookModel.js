const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const newBookSchemaModel = new mongoose.Schema({

    name: String,
    author: {
        type: ObjectId,
        ref: "NewAuthor"
    },
    price: Number,
    ratings: String,
    publisher: {
        type: ObjectId,
        ref: "NewPublisher"
    }
}, { timestamps: true });

let newBookModel = mongoose.model("newBook", newBookSchemaModel);

module.exports = newBookModel;