/**
 * 
 * JavaScript Array includes()
    The JavaScript Array includes() method checks if an array has a certain value among its entries.
 * 
 */

// Example: Using includes() method

let languages = ["JavaScript", "Java", "C", "C++", "Python"];

let check = languages.includes("Java");

console.log(check); // true

// case snsitive
let check1 = languages.includes("java");
console.log(check1); // false

// second argumenr specifies position to start at
let check2 = languages.includes("Java", 2);
console.log(check2); // false

// nagative argument starts count from backwords
// start searching from third-to-last element
let check3 = languages.includes("Java", -3);
console.log(check3); // false

let check4 = languages.includes("Ruby");
console.log(check4); // false
