const express = require('express');
const bodyParser = require('body-parser');

const route = require('./router/route');
const mongoose = require('mongoose');
const moment = require('moment');




const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




mongoose.connect("mongodb+srv://mongoabhishek:JGETcKMFq8k1RFrV@cluster0.nn6fz.mongodb.net/MongoDB-EveryThings?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongo is connected'))
    .catch(error => console.log(error))


app.use('/', route);

app.use((req, res, next) => {
    // let date = new Date();
    // let newDate = date.getDate() + 1;
    // let month = date.getMonth() + 1;
    // let year = date.getFullYear()
    // let hour = date.getHours();
    // let minute = date.getMinutes();
    // let second = date.getSeconds();
    // let allDate = (`${year}-${month}-${newDate} ${hour}:${minute}:${second}`);

    const today = moment();
    let currTime = today.format('YYYY-MM-DD HH:mm:ss');
    let ipAddress = req.ip;
    let urlRoute = req.originalUrl;

    console.log(`${currTime} ${ipAddress} ${urlRoute}`)

    next();
});

app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});