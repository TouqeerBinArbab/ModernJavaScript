/**
 *JavaScript Array flat()

The JavaScript Array flat() method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
 */

// Example: Using flat() method
const arr1 = [1, [2, 3, 4], 5];

const flattend1 = arr1.flat();
console.log(flattend1);

const arr2 = [1, 2, [3, 4, [5, 6]]];

const flattend2 = arr2.flat();
console.log(flattend2);

const flattend3 = arr2.flat(2);
console.log(flattend3);

const arr3 = [1, 2, [3, 4, [5, 6[7, 8, [9, 10]]]]];

const flattend4 = arr3.flat(Infinity);
console.log(flattend4);

// flat()  removes holes

const numArr = [1, , 3];
console.log(numArr.flat());
