//ES5 Apply()

/* The apply() method calls a function with a given this value, and arguments provided as an 
array (or an array-like object). */

var numbers = [5, 6, 2, 3, 7];

var max = Math.max.apply(null, numbers);

console.log(max);
// expected output: 7

var min = Math.min.apply(null, numbers);

console.log(min);
// expected output: 2




// Codecamp example 

var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // returns 89

//With Spread operator

const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); // returns 89

//...arr (spread operator unpacks the array, it spreads the array).



const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;
(function() {
  "use strict";
  arr2 = [...arr1]; // change this line
})();
console.log(arr2);