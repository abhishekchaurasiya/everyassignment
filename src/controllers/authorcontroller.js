const authorModel = require("../models/authorModel");
const createAuthorDetails = async (req, res) => {
    let data = req.body;

    if (data.authorName) {
        let saveData = await authorModel.create(data);
        res.send({ message: saveData });
    } else {
        res.send({ message: "Author name must be present" });
    }

};

module.exports = {createAuthorDetails}