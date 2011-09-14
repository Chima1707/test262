// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs
 * a function call using the [[Call]] property of the object
 *
 * @section 15.3.4.4
 * @path 15_Native/15.3_Function_Objects/15.3.4_Properties_of_the_Function_Prototype_Object/15.3.4.4_Function.prototype.call/S15.3.4.4_A6_T7.js
 * @description Argunemts of call function is (null, arguments,"",2), inside function call without declaration used
 */

(function (){
  Function("a1,a2,a3","this.shifted=a1.length+a2+a3;").call(null,arguments,"",2);
})("",1,2,true);

//CHECK#1
if (this["shifted"] !== "42") {
  $ERROR('#1: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}
