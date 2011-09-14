// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * ToNumber(second expression) is called first, and then ToNumber(first expression)
 *
 * @section 11.8.3
 * @path 11_Expressions/11.8_Relational_Operators/11.8.3_The_Less_than_or_equal_Operator/S11.8.3_A2.3_T1.js
 * @description Checking with "throw"
 */

//CHECK#1
var x = { valueOf: function () { throw "x"; } };
var y = { valueOf: function () { throw "y"; } };
try {
   x <= y;
   $ERROR('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x <= y throw "y". Actual: ' + (x <= y));
} catch (e) {
   if (e === "x") {
     $ERROR('#1.2: ToNumber(second expression) is called first, and then ToNumber(first expression)');
   } else {
     if (e !== "y") {
       $ERROR('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x <= y throw "y". Actual: ' + (e));
     }
   }
}
