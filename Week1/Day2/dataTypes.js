/* Datatypes specify the type of data the variable holds

1. Primitive Datatypes -> They are immutable
Once variable created and assign value to it, they cannot be changed

Number, String, boolean, undefined, null, bigint

2. Non-Primitive Datatypes -> collection of data, here it is mutable / changed

arrays, objects, functions

*/

//Number = Whole number, float, double

var phoneNumber=123456789
console.log(phoneNumber);
console.log(typeof phoneNumber);

// String = Single Char, group of char,  ' ', " ", `` (backticks)

var email="admin@testleaf.com"
console.log(email);
console.log(typeof email);

// Boolean = Returns true or false

var isJavaScriptInteresting=true
console.log(isJavaScriptInteresting);
console.log(typeof isJavaScriptInteresting);

// NULL = Explicitlty assigning null value

var landlineNumber=null
console.log(landlineNumber);
console.log(typeof landlineNumber); // object

//UNDEFINED = 

var accountNumber
console.log(accountNumber);
console.log(typeof accountNumber); //undefined

//Bigint
// -(2^53-1) to (2^53) = 16 digits

var transationID=1234567890123456789n
console.log(transationID);
console.log(typeof transationID);
