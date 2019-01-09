// example

function greeting(name = "Anonymous") {
    return "Hello " + name;
  }
  console.log(greeting("John")); // Hello John
  console.log(greeting()); // Hello Anonymous


  
const increment = (function() {
    "use strict";
    return function increment(number, value = 1) {
      return number + value;
    };
  })();
  console.log(increment(5, 2)); // returns 7
  console.log(increment(5)); // returns 6