
/**
 * Javascript Array reduce()

The reduce() method executes a reducer function on each element of the array and returns a single output value.
 * 
 */

let message = ["JavaScript ", "is ", "fun"];

// function join each string elements
function joinStrings(accumalator, currentValue) {
    return accumalator + currentValue;
}

// reduce join each element of string
let joinedStrings = message.reduce(joinStrings);
console.log(joinedStrings);
// Output: JavaScript is fun.


// Example 1: Sum of All Values of Array
let numbers = [1, 2, 3, 4, 5, 6];

function sum_reducer(accumalator, currentValue) {
    return accumalator + currentValue;
}

let sum = numbers.reduce(sum_reducer);
console.log(sum) // 21

// using arrow function
let summation = numbers.reduce((accumalator, currentValue) => accumalator + currentValue);
console.log(summation) // 21

// Example 2: Subtracting Numbers in Array
numbers = [1800, 50, 300, 20, 100];

// subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100
let difference = numbers.reduce(
    (accumalator, currentValue) => accumalator - currentValue
);
console.log(difference) // 1330

const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000;

// functiom that subtracts all array elements from given number
// 15000 - 1800 - 2000 - 3000 - 5000 - 500

let remaining = expenses.reduce(
    (accumalator, currentValue) => accumalator - currentValue, salary
);

console.log(remaining); // 2700


// Example 3: Remove Duplicate Items from Array
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAgeGroup = ageGroup.reduce(function (accumalator, currentValue) {
    if (accumalator.indexOf(currentValue) === -1) {
        accumalator.push(currentValue)
    }
    return accumalator
}, []);

console.log(uniqueAgeGroup);

// Example 4: Grouping Objects by a property

let people = [
    { name: "John", age: 21 },
    { name: "Oliver", age: 55 },
    { name: "Michael", age: 55 },
    { name: "Dwight", age: 19 },
    { name: "Oscar", age: 21 },
    { name: "Kevin", age: 55 },
]

function _groupBy(objectArray, property) {
    return objectArray.reduce(function (accumalator, currentObject) {
        let key = currentObject[property];
        if (!accumalator[key]) {
            accumalator[key] = []
        }
        accumalator[key].push(currentObject)
        return accumalator
    }, {})
}
let groupedPeople = _groupBy(people, "age");
console.log(groupedPeople);