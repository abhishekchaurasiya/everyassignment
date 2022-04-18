// const authorModel = require("../models/authorModel");
// const publisherModel = require("../models/newPublisherModel");
const newBookModel = require("../models/newBookModel")


 
//The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection.If not then send an error message that the author is not present.
// The publisherId is present in the request body.If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection.If not then send an error message that the publisher is not present.

// New book add and Detail controller
const createBookDetails = async (req, res) => {

    let bookData = req.body;
    if (bookData.author && bookData.publisher) {
        // let author = await authorModel.findById();
        // console.log(author);
        // if (!author) {
        //     res.send({ Error: "Please enter the valid author id" })
        // }
        let saveData = await newBookModel.create(bookData)
        res.send({ message: saveData });
    }







}


let getAllBookData = async (req, res) => {
    let bookData = await newBookModel.find().populate("author").populate("publisher")
    res.send({ message: bookData })
}



module.exports = { createBookDetails, getAllBookData }
