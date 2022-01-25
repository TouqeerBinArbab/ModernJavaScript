/**
 *JavaScript Array values()

The JavaScript Array values() method returns a new Array Iterator object that contains the values for each index in the array.
 */

// Example: Using values() method

const languages = ["JavaScript", "Java", "C", "C++", "Python", "Lua"];

let iterator = languages.values();

// using .next() with iterator object
console.log(iterator.next()); //{ value: 'JavaScript', done: false }

console.log(iterator.next().value); // Java

console.log("Remaining: ");

for (let value of iterator) {
  console.log(value);
}

// Remaining:
// C;
// C++;
// Python;
// Lua;

console.log(iterator.next());
// { value: undefined, done: true }
