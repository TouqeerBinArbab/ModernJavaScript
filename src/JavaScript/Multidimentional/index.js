/*
JavaScript Multidimensional Array

A multidimensional array is an array that contains another array
*/

// Example
// multidimentional array;
const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];

// Example 1
let studentsData1 = [['Jack', 24], ['Sara', 23], ['Peter', 24]];

// Example 2
let student1 = ['Jack', 24];
let student2 = ['Sara', 23];
let student3 = ['Peter', 24];

// multidimensional array
let studentsData = [student1, student2, student3];

// Access Elements of an Array

let x = [
    ['Jack', 24],
    ['Sara', 23],
    ['Peter', 24]
];

// access the first item
console.log(x[0]); // ['Jack', 24]

// access the first item of the first inner array
console.log(x[0][0]); // Jack

// access the second item of third inner arrat
console.log(x[2][1]); //24

/**  Add an Element to a Multidimensional Array */

// Adding Element to the Outer Array

let studentsData2 = [['Jack', 24], ['Sara', 23]];
studentsData2.push(["Peter", 24]);

// Adding Element to the Inner Array
let studentsData3 = [['Jack', 24], ['Sara', 23]];
studentsData2.push(["Peter", 24]);












