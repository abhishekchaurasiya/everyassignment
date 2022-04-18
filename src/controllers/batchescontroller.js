const BatchCollection = require("../models/batchesmodels");

const createBatchDetails = async (req, res) => {

    let batchData = req.body;
    let saveBatchData = await BatchCollection.create(batchData);
    res.send({ Data: saveBatchData })

}

module.exports = { createBatchDetails }