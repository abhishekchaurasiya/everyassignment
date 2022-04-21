const productModle = require("../models/productcmodel")

const createProduct = async (req, res) => {
    let data = req.body;
    let savedata = await productModle.create(data);
    res.send({ message: savedata })
};


module.exports.createProduct = createProduct