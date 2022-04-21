const mongoose = require('mongoose');

let productSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number   //mandatory property
}, { timestamps: true })

let productModle = mongoose.model("Product", productSchema);
module.exports = productModle;


