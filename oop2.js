const name1 = "Touqeer";
const name2 = new String("Touqeer");

console.log(name1);
console.log(name2);
console.log(typeof name2);

if (name1 === "Touqeer") {
  console.log("Yes");
} else {
  console.log("No");
}

if (name2 == "Touqeer") {
  console.log("Yes");
} else {
  console.log("No");
}

// Number
const num1 = 5;
const num2 = new Number(5);

console.log(num2);

// Boolean
const bol1 = true;
const bol2 = new Boolean(true);

// function
const func1 = function (x, y) {
  return x + y;
};

const func2 = new Function("x", "y", "return x + y");
console.log(func1(1, 1));
console.log(func2(2, 2));

// Object
const obj1 = { name: "Touqeer" };
const obj2 = new Object({ name: "Touqeer" });

console.log(obj1);
console.log(obj2);

// Array
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4);

console.log(arr1);
console.log(arr2);

// Regular Expression
const reg1 = /\w+/;
const reg2 = new RegExp("\\w+");

console.log(reg1);
console.log(reg2);
