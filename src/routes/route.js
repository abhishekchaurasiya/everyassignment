const express = require('express');

const router = express.Router();


// router.get('/hello', function (req, res) {
//     // Problem a)
//     let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     let subArrays = lodash.chunk(months, 3)
//     console.log('The result after splitting the months array is ', subArrays)

    // Problem b)

    // let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    // console.log('The last 9 odd numbers in the array are: ', lodash.tail(oddNumbers))

    // // Problem c)
    // let a = [1, 2, 1, 4]
    // let b = [2, 3, 4, 3]
    // let c = [6, 1, 5, 10]
    // let d = [1, 1, 1]
    // let e = [1, 2, 3, 4, 5]

    // console.log('Final array or unique numbers is : ', lodash.union(a, b, c, d, e))

//     // Problem d)
//     let arrayOfKeyValuePairs = [["horror", "The Shining"], ["drama", "Titanic"], ["thriller", "Shutter Island"], ["fantasy", "Pans Labyrinth"]]
//     console.log('The object created from arrays is :', lodash.fromPairs(arrayOfKeyValuePairs))
//     res.send('My hello api!')
// });


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
        },
        {
            id: 5,
            name: 'friends'
        },
        {
            id: 6,
            name: 'Shakti man'
        },
        {
            id: 7,
            name: 'fast in furious'
        },
        {
            id: 8,
            name: 'rangoli'
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
    res.send(movieArrObject);
    // res.send(movieArrObject.name)
    // res.send(Object.entries(movieArrObject))

});








module.exports = router;
// adding this comment for no reason