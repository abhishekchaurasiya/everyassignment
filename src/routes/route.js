const express = require('express');
const router = express.Router();





router.post("/createAuthor", authorController.createAuthor  )


module.exports = router;