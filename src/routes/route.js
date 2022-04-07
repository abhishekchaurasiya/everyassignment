const express = require('express');
let _ = require("lodash")
const router = express.Router();



router.get('/movies', function (req, res) {

    // solution no 1
    let moviename = ['rang de basanti', 'the shining', 'lord of the rings', 'batman begin', 'kgf chapater one'];

    res.send(moviename)

});


router.get('/movies/:indexNumber', function (req, res) {

    // GET /movies/1 is a valid request and it should return the movie in your array at index 1 
    // problem 2

    let movieName = ['rang de basanti', 'the shining', 'lord of the rings', 'batman begin', 'kgf chapater one'];

    //     let i = req.params.indexNumber;
    //     let showMovieName;
    //     for (j = 1; j <= movieName.length; j++) {
    //         let num = movieName[i - 1];
    //         showMovieName = num
    //     }
    //     res.send(showMovieName)

    // Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a valid index in an error message.
    // solution no 3
    // Put in validation
    let i = req.params.indexNumber;
    let showMovieName;
    for (j = 1; j <= movieName.length; j++) {
        let num = movieName[i - 1];
        if (num >= i) {
            showMovieName = num;
        } else {
            showMovieName = "Please enter the valid movie number"
        }
    }
    res.send(showMovieName)
});


router.get('/films', function (req, res) {

    // solution no 4
    let movieArrName = [
        {
            id: 1,
            name: 'The Shining'
        },
        {
            id: 2,
            name: 'Incendies'
        },
        {
            id: 3,
            name: 'Rang de Basanti'
        },
        {
            id: 4,
            name: 'Finding Nemo'
        }
    ]

    res.send(movieArrName)

});

router.get('/films/:filmId', function (req, res) {

    // solution no 5
    let movieArrName = [
        {
            id: 1,
            name: 'The Shining'
        },
        {
            id: 2,
            name: 'Incendies'
        },
        {
            id: 3,
            name: 'Rang de Basanti'
        },
        {
            id: 4,
            name: 'Finding Nemo'
        }
    ]

    let i = req.params.filmId;
    let movieArrObject;
    for (x = 1; x < movieArrName.length; x++) {
        let indexValue = movieArrName[i - 1];
        if (indexValue >= i) {
            movieArrObject = indexValue;
        } else {
            movieArrObject = ` No movies exists with this id:- ${i}`
        }
    }
    res.send(movieArrObject)
    // res.send(movieArrObject.name)
    // res.send(Object.entries(movieArrObject))

});


module.exports = router;
// adding this comment for no reason