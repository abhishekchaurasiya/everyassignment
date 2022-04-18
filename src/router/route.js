const express = require('express');

const router = express.Router();

const { createAuthorDetails } = require("../controllers/authorcontroller");
const { createPublisherDetails } = require("../controllers/publishercontroller");
const { createBookDetails, getAllBookData, updateBooks, updateBookPrices } = require("../controllers/bookDataController")


router.post("/createauthor", createAuthorDetails);
router.post("/createpublisher", createPublisherDetails);
router.post("/newBook", createBookDetails)
router.get("/getbookData", getAllBookData)
router.put("/updatebook", updateBooks)
router.put("/updateBookPrices", updateBookPrices)





module.exports = router;