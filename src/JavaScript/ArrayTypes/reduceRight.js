/**
 * 
 * Javascript Array reduceRight()
The JavaScript Array reduceRight() method executes a reducer function on each element of the array and applies it against an accumulator.
 * 
 */

// Example 1: Sum of All Values of Array
let numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumulator, currentValue) {
  return accumulator + currentValue;
}

let sum = numbers.reduceRight(sum_reducer);
console.log(sum); // 21

// using arow function
let summation = numbers.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
);
console.log(summation); //21

// Example 2: Subtracting Numbers in Array
let numbers1 = [50, 300, 20, 100, 1800];

// subtract all numbers from last number
// sincr 1st elememt is called as accumulator rather than than currentValue
// 1800 - 100 - 20 - 300 - 50
let difference = numbers1.reduceRight(
  (accumulator, currentValue) => accumulator - currentValue,
);
console.log(difference); // 1330

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// function that subtract all array elements from given number
// 15000 - 500 - 5000 - 3000 - 2000 - 1800

let remaining = expenses.reduceRight(
  (accumulator, currentValue) => accumulator - currentValue,
  salary,
);

console.log(remaining);

// Example 3: Create Composite Functions
const composite =
  (...args) =>
  (initialArg) =>
    args.reduceRight((acc, fn) => fn(acc), initialArg);

const sqrt = (value) => Math.sqrt(value);
const double = (value) => 2 * value;

const newFunc = composite(sqrt, double);

let result = newFunc(32);
console.log(result); // 8
