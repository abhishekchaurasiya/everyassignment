const DeveloperModel = require("../models/developermodel");
const BatchCollection = require("../models/batchesmodels");
    

const createDevelopersDetails = async (req, res) => {

    let developersData = req.body;
    let saveDeveloershData = await DeveloperModel.create(developersData);
    res.send({ Data: saveDeveloershData })

}


//3. Write an api GET /scholarship-developers that fetches the list of eligible developers for scholarship. An eligible developer is female with percentage greater than or equal to 70 


let getScholarShipDeveloper = async (req, res) => {

    let getData = await DeveloperModel.find({ percentage: { $gte: 70 }, gender: "female" }).populate('batch');

    // let getbatch = await BatchCollection.find({ program: "backend" }).select({program:1});
    // console.log(getbatch);

    res.send(getData);
}



// get query 
// 4. Write an api GET /developers?percentage=value1&program=value2 that only returns the developers for a given program with a percentage greater than or equal to the received value. Please note the batch name and the program values are received in the request as query params.

// For example GET /developers?percentage=55&program=radium should return all the developers from radium batch with a percentage greater than or equal to 55

const getDevelopers = async (req, res) => {
    let queryData = req.query;

    let getPercentage = await DeveloperModel.find({ percentage: { $gte: queryData.percentage }}).select({ batch: 1, _id: true });

    let getProgram = await BatchCollection.find({ _id: getPercentage[0].batch, program:queryData.params.program})
    res.send({ Batch: getProgram })
}

module.exports = { createDevelopersDetails, getScholarShipDeveloper, getDevelopers }