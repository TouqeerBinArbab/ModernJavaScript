/**
 * Javascript Array isArray()
The JavaScript Array isArray() method checks if the given argument is an Array or not.
 *
 */

// Example: Using isArray() method

let value1 = "JavaScript";
console.log(Array.isArray(value1)); // true

let value2 = 18;
console.log(Array.isArray(value2)); // true

let value3 = true;
console.log(Array.isArray(value3)); // true

let value4 = [1, 2, 3, 4];
console.log(Array.isArray(value4)); // true

let value5 = new Array(3);
console.log(Array.isArray(value5)); // true

let value6 = new Uint8Array(16);
console.log(Array.isArray(value6)) // false
