// JavaScript String

// JavaScript string is a primitive data type that is used to work with texts.


const name = 'John';

// strtings example
const name1 = 'Peter';
const name2 = "Jack";
const result = `The names are ${name1} and ${name2}`;

console.log('result', result)

const name3 = 'My name is "Peter".'
console.log('name3:', name3);


// const name4 = 'My name is 'Pater'.'; // error;

// const Pater = 'Pater'
// const name4 = "My name is "+ Pater +"."; // error;
// Access String Characters

// You can access the characters in a string in two ways.

// One way is to treat strings as an array. For example,

const a = 'hello';
console.log(a[1]); // "e"

// Another way is to use the method chatAt(1);
console.log(a.charAt(1)); // "e"


// JavaScript Strings are immutable

// In JavaScript, strings are immutable. That means the characters of a string cannot be changed. For example,

let b = 'hello';
b[0] = 'H';
console.log(a); // "hello"

// However, you can assign the variable name to a new string. For example,

let c = "hello";
c = "Hello";
console.log(c); // "Hello";

// JavaScript is Case-Sensitive

// JavaScript is case-sensitive. That means in JavaScript, the lowercase 
// and uppercase letters are treated as different values. For example,


const x = 'x';
const y = 'X';
console.log(x === y); // false


// JavaScript Multiline Strings

// To use a multiline string, you can either use the + operator or the \ operator. For example,

// using the + operator

const message1 = "This is a long message " + "that spans across multiles" + 'in the line';

console.log(message1);
// using the \ operator

const message2 = 'This is a long message \ the spans across multiple lines \ in the code.';
console.log(message2);

//JavaScript String Length

//To find the length of a string, you can use built-in length property. For example, 

const e = 'hello';
console.log(e.length); // 5

// // JavaScript Strings Objects
// You can also create strings using the new keyword. For example,

const h = 'hello';
const i = new String('hello');
console.log(h); //hello
console.log(i); //hello

console.log(typeof h) // "string"
console.log(typeof b) // "object"