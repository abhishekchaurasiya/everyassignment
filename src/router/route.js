const express = require('express');

const router = express.Router();


const { createBatchDetails } = require("../controllers/batchescontroller");
const { createDevelopersDetails, getScholarShipDeveloper, getDevelopers } = require("../controllers/developercontroellers");


router.post("/createbatch", createBatchDetails);

router.post("/createdevelopers", createDevelopersDetails);

router.get("/scholarship-developers", getScholarShipDeveloper);

router.get("/getdevelopers", getDevelopers);



module.exports = router;