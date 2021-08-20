'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3 - BinarySearch

Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the value of the search key, or -1 if the element is not in the array.

For example:

Input

[4, 8, 15, 16, 23, 42], 15


Output

2



------------------------------------------------------------------------------------------------ */

let BinarySearch = (arr, num) => {

    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let middle = Math.ceil((start + end) / 2);

        if (arr[middle] === num) {
            return middle;
        } else if (arr[middle] < num) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-03.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 3', () => {
    it('It returns an the index of numbers or -1 ', () => {
        expect(BinarySearch([4, 8, 15, 16, 23, 42], 15)).toStrictEqual(2);

    });
});

