'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4 - sumArray

Write a function called sumArray which takes in matrix array , return the sum of the array’s element into new array.

For example:

Input

[ [1, 2, 3], [3, 5, 7], [1, 7, 10] ]


Output

[6, 15, 18]



------------------------------------------------------------------------------------------------ */

let sumArray = (arr) => {
    let newArr = [];
    let val = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            val = val + arr[i][j];
        }
        newArr.push(val);
        val = 0;
    }
    return newArr;
};


/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-04.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 4', () => {
    it('It returns the sum of arrays ', () => {
        expect(sumArray([[1, 2, 3], [3, 5, 7], [1, 7, 10]])).toStrictEqual([6, 15, 18]);

    });
});

