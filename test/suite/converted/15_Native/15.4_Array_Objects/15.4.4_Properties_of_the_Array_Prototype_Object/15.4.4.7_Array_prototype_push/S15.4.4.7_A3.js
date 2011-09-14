// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * Check ToUint32(length) for Array object
 *
 * @section 15.4.4.7
 * @path 15_Native/15.4_Array_Objects/15.4.4_Properties_of_the_Array_Prototype_Object/15.4.4.7_Array_prototype_push/S15.4.4.7_A3.js
 * @description If ToUint32(length) !== length, throw RangeError
 */

var x = [];
x.length = 4294967295;

//CHECK#1
var push = x.push();
if (push !== 4294967295) {
  $ERROR('#1: x = []; x.length = 4294967295; x.push() === 4294967295. Actual: ' + (push));
}

//CHECK#2
try {
  x.push("x");
  $ERROR('#2.1: x = []; x.length = 4294967295; x.push("x") throw RangeError. Actual: ' + (push));
} catch(e) {
  if ((e instanceof RangeError) !== true) {
    $ERROR('#2.2: x = []; x.length = 4294967295; x.push("x") throw RangeError. Actual: ' + (e));
  }
}

//CHECK#3
if (x[4294967295] !== "x") {
   $ERROR('#3: x = []; x.length = 4294967295; try {x.push("x")}catch(e){}; x[4294967295] === "x". Actual: ' + (x[4294967295]));
}

//CHECK#4
if (x.length !== 4294967295) {
   $ERROR('#4: x = []; x.length = 4294967295; try {x.push("x")}catch(e){}; x.length === 4294967295. Actual: ' + (x.length));
}
