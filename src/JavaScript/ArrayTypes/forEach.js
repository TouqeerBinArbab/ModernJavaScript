/**
 * Javascript Array forEach()

The forEach() method executes a provided function for each array element.
 */


let numbers = [1, 3, , 4, 9, 8];

// function to compute square of each number
function computeSquare(element) {
    console.log(element * element);
}

// compute square root of each element
numbers.forEach(computeSquare);

/* Output:
1
9
16
81
64
*/

// Example 1: Printing Contents of Array

function printElements(element, index) {
    console.log('Array Element ' + index + ': ' + element);
}

const prices = [1800, 2000, 3000, , 5000, 500, 8000];

// forEach does not execute for elements without values
// in this case, it skips third element as it is empty

prices.forEach(printElements);

// Example 2: Using thisArg

function Counter() {
    this.count = 0;
    this.sum = 0;
    this.product = 1
}

Counter.prototype.execute = function (array) {
    array.forEach((entry) => {
        this.sum += entry;
        ++this.count;
        this.product *= entry
    }, this)
}

const obj = new Counter();
obj.execute([4, 1, , 45, 8]);

console.log(obj.count); // 4
console.log(obj.sum); // 58
console.log(obj.product); // 1440
