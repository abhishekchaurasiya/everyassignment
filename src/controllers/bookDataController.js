const authorModel = require("../models/authorModel");
const publisherModel = require("../models/newPublisherModel");
const newBookModel = require("../models/newBookModel")



const createAuthorDetails = async (req, res) => {
    let data = req.body;

    if (data.authorName) {
        let saveData = await authorModel.create(data);
        res.send({ message: saveData });
    } else {
        res.send({ message: "Author name must be present" });
    }

};

const createPublisherDetails = async (req, res) => {
    let data = req.body;
    if (data.name) {
        let saveData = await publisherModel.create(data);
        res.send({ message: saveData });
    } else {
        res.send({ message: "Author name must be present" });
    }

};

const createBookDetails = async (req, res) => {
    let data = req.body;
    if (data.author && data.publisher) {
        
            let saveData = await newBookModel.create(data);
            res.send({ message: saveData });

    } else {

        res.send({ message: "this authore name not present" });

    }

}





module.exports = { createAuthorDetails, createPublisherDetails, createBookDetails }
