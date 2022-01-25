/**
 *Javascript Array.from()

The JavaScript Array.from() static method creates a shallow-copied Array instance from an array-like or iterable object.

 */

// Example 1: Using from() method

// Array from String

let arr1 = Array.from("abc");
console.log(arr1); // ['a', 'b', 'c']

// Array from Map

let mapper = new Map([
  ["1", "a"],
  ["2", "b"],
]);

let arrr2 = Array.from(mapper);
console.log(arrr2); // [ [ '1', 'a' ], [ '2', 'b' ] ]

let arrr3 = Array.from(mapper.keys());
console.log(arrr3); //[ '1', '2' ]

// Array from Set
let set = new Set(["JavaScript", "Python", "Go"]);
let arrr4 = Array.from(set);
console.log(arrr4);
// [ 'JavaScript', 'Python', 'Go' ]

// Example 2: Using from() method with mapFunc

function createArr(arrayLike, mapFunc) {
  return Array.from(arrayLike, mapFunc);
}

// usingg arrow functon for mapFunc
let arr = createArr("123456", (x) => 2 * x);

console.log(arr); // [2,4, 6, 8, 10, 12]
