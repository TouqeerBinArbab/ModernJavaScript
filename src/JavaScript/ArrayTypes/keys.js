/**
 *JavaScript Array keys()

The JavaScript Array keys() method returns a new Array Iterator object that contains the keys for each index in the array.
 */

// Example: Using keys() method

const languages = ["JavaScript", "Java", "C", "C++", "Python", "Lua"];

let iterator = languages.keys();

for (let key of iterator) {
  console.log(key);
}

/* Output 
0
1
2
3
4
5
*/
