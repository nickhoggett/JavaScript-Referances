/* You can search for a literal pattern with some flexibility with character classes. Character classes allow 
you to define a group of characters you wish to match by placing them inside square ([ and ]) brackets */

/* For example, you want to match "bag", "big", and "bug" but not "bog". You can create the regex /b[aiu]g/
to do this. The [aiu] is the character class that will only match the characters "a", "i", or "u". */

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null


let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aieou]/ig; 
let result = quoteSample.match(vowelRegex);