// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * 0, null, undefined, false, empty string, NaN in expression is evaluated to false
 *
 * @section 12.5
 * @path 12_Statement/12.5_The_if_Statement/S12.5_A1.1_T1.js
 * @description Using "if" without "else" construction
 */

//////////////////////////////////////////////////////////////////////////////
//CHECK#1

if(0)
	$ERROR('#1: 0 in expression is evaluated to false ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(false)
    $ERROR('#2: false in expression is evaluated to false ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(null)
	$ERROR('#3: null in expression is evaluated to false ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(undefined)
	$ERROR('#4: undefined in expression is evaluated to false ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if("")
    $ERROR('#5: empty string in expression is evaluated to false ');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if(NaN)
    $ERROR('#5: NaN in expression is evaluated to false ');
//
//////////////////////////////////////////////////////////////////////////////
