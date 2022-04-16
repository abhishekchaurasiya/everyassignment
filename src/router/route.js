const express = require('express');

const router = express.Router();


const { createAuthorDetails, createPublisherDetails, createBookDetails } = require("../controllers/bookDataController")


router.post("/createauthor", createAuthorDetails);
router.post("/createpublisher", createPublisherDetails);
router.post("/newBook", createBookDetails)





module.exports = router;