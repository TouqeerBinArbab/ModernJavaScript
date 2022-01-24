/**
 *JavaScript Array map()

The map() method creates a new array with the results of calling a function for every array element.
 */

let numbers = [2, 4, 6, 8, 10];

// function to return the square of a number

function square(number) {
  return number * number;
}

// apply square() function to each item of the number list

let square_numbers = numbers.map(square);
console.log(square_numbers);

// Output [4, 16, 36, 64, 100];

// Example 1: Mapping array elements using custom function
const prices = [1800, 2000, 3000, 5000, 500, 8000];

let newPrices = prices.map(Math.sqrt);
console.log(newPrices);

// [
//   42.42640687119285, 44.721359549995796, 54.772255750516614, 70.71067811865476,
//   22.360679774997898, 89.44271909999159,
// ];

// custom arrow function
const string = "JavaScript";
const stringArr = string.split(""); // array with individual string character

let asciiArr = stringArr.map((x) => x.charCodeAt([0]));

// map() does not change the original array
console.log(stringArr);
// ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"];

console.log(asciiArr);
// [74, 97, 118, 97, 83, 99, 114, 105, 112, 116];

// Example 2: map() for object elements in array

const employees = [
  { name: "Adam", salary: 5000, bonus: 500, tax: 1000 },
  { name: "Noah", salary: 8000, bonus: 1500, tax: 2500 },
  { name: "Fabiano", salary: 1500, bonus: 500, tax: 200 },
  { name: "Alireza", salary: 4500, bonus: 500, tax: 200 },
];

// culculate the net amount to be given to the employees
const calcAmt = (obj) => {
  newObj = {};
  newObj.name = obj.name;
  newObj.netEarning = obj.salary + obj.bonus - obj.tax;
  return newObj;
};

const newArr = employees.map(calcAmt);
console.log(newArr);
