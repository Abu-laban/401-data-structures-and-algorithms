'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2 - insertShiftArray

Write a function called insertShiftArray which takes in an array and a value to be added. Without utilizing any of the built-in methods available to your language, return an array with the new value added at the middle index.

For example:

Input

[2,4,6,-8], 5

[42,8,15,23,42], 16

Output

[2,4,5,6,-8]

[42,8,15,16,23,42]


------------------------------------------------------------------------------------------------ */

let insertShiftArray = (arr, num) => {

    let val = arr.length / 2;
    let idx = 0;
    if (val % 2 === 0) {
        idx = val;
    } else {
        idx = val + 1;
    }
    arr.splice(idx, 0, num);
    return arr;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-01.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 2', () => {
    it('It returns an array with added number', () => {
        expect(insertShiftArray([2, 4, 6, -8], 5)).toStrictEqual([2, 4, 5, 6, -8]);
        expect(insertShiftArray([42, 8, 15, 23, 42], 16)).toStrictEqual([42, 8, 15, 16, 23, 42]);
    });
});

