// Destructuring an array:

const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

// The variable a is assigned the first value of the array, and b is assigned the second value of the array.

let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
   [b, a] = [a, b];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8
