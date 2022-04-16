const mongoose = require('mongoose');

const publisherModelScheama = new mongoose.Schema({

    name: String,
    headQuarter: String,


}, { timestamps: true });


let publisherModel = mongoose.model("NewPublisher", publisherModelScheama);

module.exports = publisherModel;