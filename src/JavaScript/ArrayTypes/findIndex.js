/** 
findIndex(); 
The JavaScript Array findIndex() method returns the index of the first array element that satisfies the provided test function or else returns -1. */

// Using findIndex() method

function isEven(element) {
  return element % 2 == 0;
}

let randomArray = [1, 45, 8, 98, 7];

firstEven = randomArray.findIndex(isEven);

console.log(firstEven);

firstOdd = randomArray.findIndex((element) => element % 2 != 0);

console.log(firstOdd);

// Example 2: findIndex() with Object elements

const team = [
  { name: "Bill", age: 10 },
  { name: "Linus", age: 15 },
  { name: "Alan", age: 20 },
  { name: "Steve", age: 34 },
];

function isAdult(member) {
  return member.age >= 18;
}

console.log(team.findIndex(isAdult));

// using arow function and deconstructing

adultMember = team.findIndex(({ age }) => age >= 18);
console.log(adultMember);

// returns - 1 if none satisfy the function

infantMember = team.findIndex(({ age }) => age <= 1);

console.log(infantMember);
