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

    let movieName = ['rang de basanti', 'the shining', 'lord of the rings', 'batman begin', 'kgf chapater one', "border", "solay", "dewar"];

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
    let result = showMovieName.charAt(0).toUpperCase() + showMovieName.slice(1).toLowerCase()
    res.send(result)
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


router.get("/array", function (req, res) {

    // let numbers = [0, 1, 2, 3, 4, 5, 7, 8, 9];
    // let missing = [];

    // // Find the missing array items
    // for (let i = 0; i < numbers.length; i++) {

    //     if ((numbers[i + 1] - numbers[i]) > 1) {
    //         missing.push(numbers[i + 1] - numbers[1]);
    //     }
    // }


    // let numbers = [1, 3, 4, 5, 7, 8, 9]; // Missing 2,6
    // let expectedNumber = numbers.length + 1;
    // let totalSumNumberr = expectedNumber * (expectedNumber + 1) / 2;
    // let sum = 0;
    // for (i = 0; i < numbers.length; i++) {
    //     sum = numbers[i];
    // }
    // let newVal = (totalSumNumberr - sum);
    // console.log(newVal);

    // function missing(arr) {
    //     let missArry = [];

    //     // Math.min(1,2,3,4)  //1
    //     let minArry = Math.min(...arr)
    //     let maxArr = Math.max(...arr)

    //     // indexOf return its position, not there in -1
    //     for (let x = minArry; x < maxArr; x++) {
    //         if (arr.indexOf(x) < 0) {
    //             missArry.push(x)
    //         }
    //     }
    //     return missArry;
    // }

    // // let numbers = [1, 2, 3, 4, 5, 7, 8, 9, 12, 15]
    // let numbers = [33, 34, 35, 37, 38, 39]
    // let result = missing(numbers)

    let numbers = [1, 2, 3, 4, 5, 7, 8, 9];
    let n = numbers.length + 1;
    let sumOfTheArray = (n * (n + 1)) / 2;

    for (let index = 0; index < numbers.length; index++) {
        sumOfTheArray = sumOfTheArray - numbers[index];
    }
    let valuse = sumOfTheArray;
    console.log(valuse);
    res.send("hello")


});

module.exports = router;
// adding this comment for no reason