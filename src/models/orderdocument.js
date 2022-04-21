const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId;

let oderDocumentSchema = new mongoose.Schema({

    userId: {
        type: ObjectId,
        ref: "User"
    },
    productId: {
        type: ObjectId,
        ref: "Product"
    },
    amount: Number,
    isFreeAppUser: Boolean,
    date: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

let orderDocumentModel = mongoose.model("Oderdocument", oderDocumentSchema);
module.exports= orderDocumentModel;