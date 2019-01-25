/* For example, /a+/g would find one match in "abc" and return ["a"]. Because of the +, it would also find a 
single match in "aabc" and return ["aa"].

If it were instead checking the string "abab", it would find two matches and return ["a", "a"] because the a 
characters are not in a row - there is a b between them. Finally, since there is no "a" in the string "bcd", 
it wouldn't find a match. */

let difficultSpelling = "Mississippi";
let myRegex = /s+/g; 
let result = difficultSpelling.match(myRegex); // Return ["ss","ss"]