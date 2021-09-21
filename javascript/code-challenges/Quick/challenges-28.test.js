'use strict';

function quickSort(arr, left, right) {
    if (left < right) {
        let position = partition(arr, left, right);
        quickSort(arr, left, position - 1);
        quickSort(arr, position + 1, right);
    }
}

function partition(arr, left, right) {
    let pivot = arr[right];
    let low = left - 1;
    for (let i = left; i < right; i++) {
        if (arr[i] <= pivot) {
            low++;
            swap(arr, i, low);
        }
    }
    swap(arr, right, (low + 1));
    return (low + 1);
}

function swap(arr, i, low) {
    let temp;
    temp = arr[i];
    arr[i] = arr[low];
    arr[low] = temp;
    // console.log(temp);
}


describe('quick sort Array test', () => {

    it('should return the array in place, sorted from lowest to highest value', () => {
        let array = [8, 4, 23, 42, 16, 15];
        let left = 0;
        let right = array.length - 1;
        quickSort(array, left, right);
        // console.log(array);
        expect(array).toEqual([4, 8, 15, 16, 23, 42]);
    });

    it('can sort negetive numbers', () => {
        let array = [-88, 4, 23, 42, 16, 15];
        let left = 0;
        let right = array.length - 1;
        quickSort(array, left, right);
        // console.log(array);
        expect(array).toEqual([-88, 4, 15, 16, 23, 42]);
    });

});
