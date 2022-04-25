const bookUserModel = require('../models/bookmodelschema');

const createBookUserData = async (req, res) => {
    let data = req.body;
    let userData = await bookUserModel.create(data);
    res.send({ message: userData })
}


const getBookInfo = async (req, res) => {
    let userData = await bookUserModel.find().select({ bookName: 1, authorName: 1, _id: 0 })
    res.send({ message: userData })
}

const getBooksInYear = async (req, res) => {
    let data = req.body
    data.year
    let allbooks = await bookUserModel.find(data)
    res.send({ message: allbooks })
}

const getParticularBooks = async (req, res) => {
    let data = req.body;
    let allBooks = await bookUserModel.find(data)
    res.send({ message: allBooks })
}

const priceDetails = async (req, res) => {
    let data = req.body;
    data.year;
    let allBooks = await bookUserModel.find({ "price.indian": { $in: ["100INR", "200INR", "500INR"] } })
    res.send({ message: allBooks })
}

// hence the condition will differ based on what you input in the request body
// const getAllThings = async (req, res) => {
//     let data = req.body;
//     data.bookName;
//     data.year;
//     data.authorName;
//     data.price.indianPrice;
//     data.totalPage;


//     //     const getParticularBooks = async function(req,res)
//     // {
//     //   let condition = req.body
//     //   let particularBooks = await bookModel.find(condition)

//     //   res.send(particularBooks)
//     // }

//     let allBooks = await bookUserModel.find(data).select({ bookName: true, authorName: true, price: { indianPrice: true }, _id: 0 }).select({ bookName: true, year: true, authorName: true, price: { indianPrice: true }, totalPage: true, _id: 0 })
//     res.send({ message: allBooks })
// }

const getRandomBooks = async (req, res) => {
    let randomBook = await bookUserModel.find({ $or: [{ stcokAvailable: true }, { totalPage: { $gt: 500 } }] })
    // .select({ totalPage: true, bookName: true, authorName: true, price: { indianPrice: true }, _id: 0 })
    res.send({ msg: randomBook })

}


module.exports.createBookUserData = createBookUserData;
module.exports.getBookInfo = getBookInfo
module.exports.getBooksInYear = getBooksInYear;
module.exports.getParticularBooks = getParticularBooks
module.exports.priceDetails = priceDetails
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks

