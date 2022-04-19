const express = require('express');

const router = express.Router();

const middle = require("../middleware/middleware")

const { createBatchDetails } = require("../controllers/batchescontroller");
const res = require('express/lib/response');


router.post("/functionUp/middle-ware", middle.middleWare, middleWare1, createBatchDetails);


//  8171841589

// 8280304644


module.exports = router;