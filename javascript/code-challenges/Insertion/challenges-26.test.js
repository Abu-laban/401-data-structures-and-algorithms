'use strict';

function insertionSort(arrayToSort) {
    for (let i = 1; i < arrayToSort.length; i++) {
        let j = i - 1;
        let temp = arrayToSort[i];
        while ((j >= 0) && (temp < arrayToSort[j])) {
            arrayToSort[j + 1] = arrayToSort[j];
            j--;
        }
        arrayToSort[j + 1] = temp;
    }
    return arrayToSort;
}

describe('insertion Sort Array test', () => {

    it('should return the array in place, sorted from lowest to highest value', () => {
        let array = [8, 4, 23, 42, 16, 15];
        insertionSort(array);
        expect(array).toEqual([4, 8, 15, 16, 23, 42]);
    });

    it('can sort negetive numbers', () => {
        let array = [-88, 4, 23, 42, 16, 15];
        insertionSort(array);
        expect(array).toEqual([-88, 4, 15, 16, 23, 42]);
    });

});
