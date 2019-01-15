/* Consider the following example. Imagine that math_array_functions has about 20 functions, but I only need one,
 countItems, in my current file. The old require() approach would force me to bring in all 20 functions. 
 With this new import syntax, I can bring in just the desired function, like so: */

 import { countItems } from "math_array_functions"

 import { function } from "file_path_goes_here"
// We can also import variables the same way!



"use strict";
import {capitalizeString} from "string_functions";
capitalizeString("hello!");