/**
 * JavaScript Array flatMap()

The JavaScript Array flatMap() method first maps each element using a mapping function, then flattens it into a new array.
 */

//Example: Using flatMap() method

const arr1 = [1, 2, 3, 4, 5];
const newArr = arr1.flatMap((x) => [x ** 2])
console.log(newArr);

// can also be done as

const intermediate = arr1.map((x) => [x ** 2]);
console.log(intermediate);

const newArr2 = intermediate.flat();
console.log(newArr2);

const numbers = [1, 2, 3, 4, 5, 6, 7];

// remove add and split even element to two half elements
function func(n) {
    if (n % 2 === 0) {
        return [n / 2, n / 2];
    } else {
        return []
    }
}

const arr3 = [[1, 1], [2, 2], [3, 3]];


const newArr3 = numbers.flatMap(func);
console.log(newArr3);



