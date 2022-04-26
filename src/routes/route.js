const express = require('express');
const router = express.Router();

const { getStates, vaccinationStateid, vaccinationDistrictBy, vaccineGetByPin, calenderByDistrict, getCurrentTime, sortedCities, getAllMems, pickMemId, createMemes } = require("../controllers/vaccinationcontroller")


// Cowin api
router.get("/cowin/states", getStates);

router.get("/cowin/districtsInState/:stateId", vaccinationStateid);

router.get("/cowin/districId", vaccinationDistrictBy);

router.get("/cowin/getByPin", vaccineGetByPin);

router.get("/cowin/calendarByDistrict", calenderByDistrict)

// Open weater map 
router.get("/current/weather", getCurrentTime);

router.get("/cityData", sortedCities)

// All memes
router.get("/getallmems", getAllMems);
router.post("/pickmemid", pickMemId);

router.post("/creatememes", createMemes)



module.exports = router;