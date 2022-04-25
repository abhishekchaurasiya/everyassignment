const express = require('express');

const router = express.Router();

let players = [
    {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    },

    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
    },
]

router.post("/players", function (req, res) {

    let allData = req.body
    let returnData = 0;
    players.filter((x) => {
        if (x.name === allData.name) {
            returnData = 1;
        }
    })
    if (returnData === 1) {
        return res.send({ message: "This name is already exists" });
    } else {
        players.push(allData)
        console.log(players);

    }
    // res.send(players

    res.send({ data: players, status: true })

    // res.send('hello')
})




module.exports = router;
// adding this comment for no reason