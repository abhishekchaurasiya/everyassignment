
const authorModel = require("../models/authorModel");
const newBookModel = require("../models/newBookModel");
const publisherModel = require("../models/newPublisherModel");



//The authorId is present in the request body. If absent send an error message that this detail is required
// If present, make sure the authorId is a valid ObjectId in the author collection.If not then send an error message that the author is not present.
// The publisherId is present in the request body.If absent send an error message that this detail is required
// If present, make sure the publisherId is a valid ObjectId in the publisher collection.If not then send an error message that the publisher is not present.

// New book add and Detail controller
const createBookDetails = async (req, res) => {

    let bookData = req.body;
    let authorId = bookData.author;
    let publisherId = bookData.publisher;

    if (!authorId) {
        return res.send({ Error: "Author id must be present in the book detials" })
    }
    if (!publisherId) {
        return res.send({ Error: "Publisher id must be present in the book detials" })
    }

    let author = await authorModel.findById(authorId);
    if (!author) {
        return res.send({ Error: "Not valid Object id" })
    }

    let publisher = await publisherModel.findById(publisherId)
    if (!publisher) {
        return res.send({ Error: "Not valid publisher id" })
    }

    let saveData = await newBookModel.create(bookData)
    res.send({ message: saveData });
}

// 4th solution 

let getAllBookData = async (req, res) => {
    let bookData = await newBookModel.find().populate("author publisher")
    res.send({ message: bookData })
}

// 5th problem (a)
// a) Add a new boolean attribute in the book schema called isHardCover with a default false value. For the books published by 'Penguin' and 'HarperCollins', update this key to true.

let updateBooks = async (req, res) => {

    const hardCoverPublisherid = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select({ _id: 1 });

    let allOfPublisher = [];
    for (let i = 0; i < hardCoverPublisherid.length; i++) {
        let object = hardCoverPublisherid[i]._id;
        allOfPublisher.push(object)
    }
    // console.log(allOfPublisher);

    let bookInfo = await newBookModel.updateMany({ publisher: { $in: allOfPublisher } }, { isHardCover: true }, { new: true });
    res.send({ data: bookInfo });
}


// 5th b ;

// b) For the books written by authors having a rating greater than 3.5, update the books price by 10(For eg if old price for such a book is 50, new will be 60)


let updateBookPrices = async (req, res) => {
    let authorRating = await authorModel.find({ rating: { $gt: 3.5 } }).select({ rating: 1 });
    // console.log(bookRating);

    let newBookRating = [];
    for (let i = 0; i < authorRating.length; i++) {
        // let object = authorRating[i].rating;
        // newBookRating.push(object);
        newBookRating.push(authorRating[i]._id)

    };

    console.log(newBookRating)

    let updatePriceAllBook = await newBookModel.updateMany({ $inc: { price: 10, newBookRating } })


    res.send({ data: updatePriceAllBook })

}

module.exports = { createBookDetails, getAllBookData, updateBooks, updateBookPrices }
