let catName;
let quote;

function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

// Let instead of var is a method to avoid any mistake / error in variables.. Will not replace. 

/* "use strict"; declaring this will not allow mistakes in code 
    e.g x = 3.14; // throws an error because x is not declared. */