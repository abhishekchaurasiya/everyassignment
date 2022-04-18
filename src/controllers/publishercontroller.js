const publisherModel = require("../models/newPublisherModel");

const createPublisherDetails = async (req, res) => {
    let data = req.body;
    if (data.name) {
        let saveData = await publisherModel.create(data);
        res.send({ message: saveData });
    } else {
        res.send({ message: "Author name must be present" });
    }

};

module.exports = {createPublisherDetails}