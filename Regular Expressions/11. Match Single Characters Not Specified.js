/* To create a negated character set, you place a caret character (^) after the opening bracket and before 
the characters you do not want to match.

For example, /[^aeiou]/gi matches all characters that are not a vowel. Note that characters like ., !, [, @, / 
and white space are matched - the negated vowel character set only excludes the vowel characters. */

let quoteSample = "3 blind mice.";
let myRegex = /[^aeiou^0-99]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

