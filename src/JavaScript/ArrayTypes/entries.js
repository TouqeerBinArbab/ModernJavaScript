/**
 *avascript Array entries()

The JavaScript Array entries() method returns a new Array Iterator object containing key/value pairs for each array index.

 */

// Example: Using entries() method

const languages = ["JavaScript", "Java", "C", "C++", "Python", "Lua"];

let iterator = languages.entries();

for (let entry of iterator) {
  console.log(entry);
}

/* Output 
[ 0, 'JavaScript' ]
[ 1, 'Java' ]
[ 2, 'C' ]
[ 3, 'C++' ]
[ 4, 'Python' ]
[ 5, 'Lua' ]
*/
