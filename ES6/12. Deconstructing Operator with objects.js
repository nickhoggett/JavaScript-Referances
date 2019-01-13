// ES5 code, taking values from object

var voxel = {x: 3.6, y: 7.4, z: 6.54 };
var x = voxel.x; // x = 3.6
var y = voxel.y; // y = 7.4
var z = voxel.z; // z = 6.54


//Same code in ES6 

const { x, y, z } = voxel; // x = 3.6, y = 7.4, z = 6.54

/* If instead you want to store the values of voxel.x into a, voxel.y into b, and voxel.z into c, you have that 
freedom as well. */

const { x : a, y : b, z : c } = voxel // a = 3.6, b = 7.4, c = 6.54


//Decontructing Operator with function

const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79
  };
  
  function getTempOfTmrw(avgTemperatures) {
    "use strict";
    // change code below this line
    const {tomorrow: tempOfTomorrow} = avgTemperatures; // change this line
    // change code above this line
    return tempOfTomorrow;
  }
  
  console.log(getTempOfTmrw(AVG_TEMPERATURES)); // should be 79