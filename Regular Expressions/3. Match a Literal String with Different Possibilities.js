/* This is powerful to search single strings, but it's limited to only one pattern. You can search for multiple 
patterns using the alternation or OR operator: |.

This operator matches patterns either before or after it. For example, if you wanted to match "yes" or "no", 
the regex you want is /yes|no/. */

let petString = "James has a pet cat.";
let petRegex = /god | cat | bird | fish/; // Change this line
let result = petRegex.test(petString);