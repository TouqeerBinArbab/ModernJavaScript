/**
 * Javascript Array some()

The JavaScript Array some() method tests whether any of the array elements pass the given test function.
 */

// Example: Check Value of Array Element

function checkMinor(age) {
    return age < 18
}

const ageArray = [34, 23, 20, 26, 12];
let check = ageArray.some(checkMinor);

if (check) {
    console.log("All members must be at least 18 years of age.");
}

// using arrow function
let check1 = ageArray.some(age => age >= 18); // true
console.log(check1)