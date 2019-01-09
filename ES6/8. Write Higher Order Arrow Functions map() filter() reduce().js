/*The map() method creates a new array with the results of calling a provided function on every 
element in the calling array. */

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]




/* The filter() method creates a new array with all elements that pass the test implemented 
by the provided function. */

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]




/* The reduce() method executes a reducer function (that you provide) on each member of the 
array resulting in a single output value. */

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15


const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];
    const squareList = (arr) => {
      "use strict";
        const squaredIntegers = arr.filter( (num) => num > 0 && num % parseInt (num) === 0 ).map( (num) => Math.pow(num, 2) );
      return squaredIntegers;
    };

    // test your code
    const squaredIntegers = squareList(realNumberArray);
    console.log(squaredIntegers);

