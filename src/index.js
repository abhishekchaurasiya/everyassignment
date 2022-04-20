const express = require('express');
const bodyParser = require('body-parser');

const route = require('./router/route');
const mongoose = require('mongoose');


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// app.use((req, res, next) => {
//     let date = new Date();
//     let newDate = date.getDate() + 1;
//     let month = date.getMonth() + 1;
//     let year = date.getFullYear() + 1
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();

//     console.log(year + "-" + month + "-" + newDate + " " + hour + ":" + minute + ":" + second);
//     console.log(req.originalUrl);
//     // console.log(req.connection.remoteAddress);
//     console.log(req.ip);
//     // console.log(req.socket.remoteAddress);
//     next();
// })

mongoose.connect("mongodb+srv://mongoabhishek:JGETcKMFq8k1RFrV@cluster0.nn6fz.mongodb.net/MongoDB-EveryThings?retryWrites=true&w=majority", { useNewUrlParser: true })
    .then(() => console.log('mongo is connected'))
    .catch(error => console.log(error))


app.use('/', route);

app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});