
let axios = require("axios");

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let vaccinationStateid = async (req, res) => {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);

        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        res.status(500).send({ msg: err.message });
    }
}

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

let vaccinationDistrictBy = async (req, res) => {
    try {
        let districtId = req.query.district_id;
        let date = req.query.date;

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${districtId}&date=${date}`
        }

        let result = await axios(options);
        let data = result.data;

        res.status(200).send({ message: data, status: true })

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


let vaccineGetByPin = async (req, res) => {
    try {
        let pin = req.query.pincode;
        let date = req.query.date;

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options);
        let data = result.data;

        res.status(200).send({ message: data, status: true })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}


let calenderByDistrict = async (req, res) => {
    try {
        let id = req.query.district_id;
        let date = req.query.date;
        let pin = req.query.pincode;

        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=${id}&date=${date}&pincode=${pin}`
        }
        let result = await axios(options);
        let data = result.data;

        res.status(200).send({ message: data, status: true })
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
}


// OpenWeatherMap assignment solution

let getCurrentTime = async (req, res) => {
    try {
        let place = req.query.q;
        let appid = req.query.appid
        // https://api.openweathermap.org/data/2.5/weather?q=rewa&lat=41.5085&lon=-0.1257&appid=688420f49d85db50ba346d5d3462bb4a

        // https://api.openweathermap.org/data/2.5/weather?q=london&appid=688420f49d85db50ba346d5d3462bb4a
        let options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=${appid}`
        }
        let result = await axios(options);
        let data = result.data;

        res.status(200).send({ message: data, status: true })
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

// Sorted Cites temperature
let sortedCities = async (req, res) => {
    try {
        let cityName = ["Bengaluru", "Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow", "Rewa"];
        let cityInArray = [];
        for (let cities of cityName) {
            let object = { city: cities };
            let options = {
                method: "get",
                url: `https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=688420f49d85db50ba346d5d3462bb4a`
            };

            let result = await axios(options);
            object.temp = result.data.main.temp;

            // console.log(result.data.main.temp);
            cityInArray.push(object);
        }

        let sorted = cityInArray.sort((a, b) => a.temp - b.temp);
        res.status(200).send({ message: sorted, status: true })


    } catch (error) {
        res.status(500).send({ message: error.message })

    }
}


// Axios POST request assignment
// 1. Get all the memes at Postman (https://api.imgflip.com/get_memes)

let getAllMems = async function (req, res) {
    try {
        let options = {
            method: 'get',
            url: `https://api.imgflip.com/get_memes`
        };

        let result = await axios(options);
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};

// 2. Pick a memeId you want (Eg 129242436) for the POST request

let pickMemId = async function (req, res) {
    try {
        let memeId = req.body.memes
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/get_memes`,
            data: "memeId"
        };

        let result = await axios(options);
        let data = result.data;
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};


let createMemes = async function (req, res) {
    try {

        let template = req.query.template_id;
        let text0 = req.query.text0;
        let text1 = req.query.text1;
        let username = req.query.username;
        let password = req.query.password
        let options = {
            method: 'post',
            url: `https://api.imgflip.com/caption_image?template_id=${template}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
            data:template
        };



        let result = await axios(options);
        let data = result.data;
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
};






module.exports = { getStates, vaccinationStateid, vaccinationDistrictBy, vaccineGetByPin, calenderByDistrict, getCurrentTime, sortedCities, getAllMems, pickMemId, createMemes }