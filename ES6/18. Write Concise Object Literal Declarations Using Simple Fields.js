// Consider the following code

const getMousePosition = (x, y) => ({
    x: x,
    y: y
  });


// Here is the same function from above rewritten to use this new syntax:

const getMousePosition = (x, y) => ({ x, y });


// For example

const createPerson = (name, age, gender) => {
    "use strict";
    // change code below this line
  name, age, gender  
    // change code above this line
  };
  console.log(createPerson("Zodiac Hasbro", 56, "male")); // returns a proper object