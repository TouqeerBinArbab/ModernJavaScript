/**
 *Javascript Array copyWithin()

The JavaScript Array copyWithin() method shallow copies array elements to another position in the array, overwriting the existing values.

 */

// Example: Using copyWithin() method

let array = [1, 2, 3, 4, 5, 6];

// target: from second-to-last element, start: 0, end: array.length
let returned_arr = array.copyWithin(-2);
console.log(returned_arr); //[1, 2, 3, 4, 1, 2];

// modifies the original array
console.log(array); // [1, 2, 3, 4, 1, 2];

array = [1, 2, 3, 4, 5, 6];
// target: 0, start copying from 5th element
array.copyWithin(0, 4);

console.log(array); // [ 5, 6, 3, 4, 5, 6 ]

array = [1, 2, 3, 4, 5, 6];
// target: 1, start copying from 3rd element to second-to-last element
array.copyWithin(1, 2, -1); // -1 = last element (exclusive)
console.log(array); // [1, 3, 4, 5, 5, 6]
