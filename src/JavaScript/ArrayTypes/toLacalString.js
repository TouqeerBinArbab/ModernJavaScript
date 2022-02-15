/**
 *Javascript Array toLocaleString()

The JavaScript Array toLocaleString() method returns a string representing the elements of the array.
 */

// Example: Using toLocaleString() method
let array = [1, "JavaScript", new Date()];

let string = array.toLocaleString();
console.log(string);

let prices = [689, 100, 4577, 56];

// using locales and options
// using Nepali Rupess currency string format

let string1 = prices.toLocaleString("su-NP", {
    style: "currency",
    currency: "NPR",
});

console.log(string1);
