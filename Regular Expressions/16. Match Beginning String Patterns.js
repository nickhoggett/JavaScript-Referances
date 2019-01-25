/*Here's an example to review how to do this:

The regex /z+/ matches the letter z when it appears one or more times in a row. It would find matches in all of #
the following strings: */

"z"
"zzzzzz"
"ABCzzzz"
"zzzzABC"
"abczzzzzzzzzzzzzzzzzzzzzabc"


// But it does not find matches in the following strings since there are no letter z characters:

""
"ABC"
"abcabc"

// example crowd gathering
let crowd = 'P1P2P3P4P5P6CCCP7P8P9';

let reCriminals = /C+/;

let matchedCriminals = crowd.match(reCriminals);
console.log(matchedCriminals);
