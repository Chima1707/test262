// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * String instance has not [[construct]] property
 *
 * @section 15.5.5
 * @path 15_Native/15.5_String_Objects/15.5.5_Properties_of_String_Instances/S15.5.5_A2_T2.js
 * @description Checking if creating "new String" fails
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  new new String;
  $FAIL('#1: "new new String" lead to throwing exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: Exception is instance of TypeError. Actual: exception is '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////
