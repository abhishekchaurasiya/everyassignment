const express = require('express');

const router = express.Router();


const allProduct = require("../controllers/productcontroller")


router.post("/createproduct", allProduct.createProduct);






module.exports = router;