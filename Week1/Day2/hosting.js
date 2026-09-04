// Hoisting - default behavior of JS
// Memory creation phase + execution Phase

/* var a=10
console.log(a); // 10 */

//Hoisting
// console.log(a); //undefined
// var a=10

/* Internally, Declaration is hoisted to the top
(var a
a=10)

var a
console.log(a);
a=10

initially undefined during memory creation phase, then during the dynamic runtime / exec phase, memory is allocated and value is assigned
*/

// let - ReferenceError: Cannot access 'b' before initialization

console.log(b);     // let b 
let b=20            // console.log(b)
                    // b=20



//const - ReferenceError: Cannot access 'b' before initialization

// const c=20
// console.log(c); //20

// console.log(c); // ReferenceError
// const c=20

console.log(c);

/* const variable declaration and value assignment should happen in the same line.
const c
c="some value" */

// The Temporal Dead Zone (TDZ) in JavaScript refers to the period between when a variable is hoisted and when it is initialized, during which accessing the variable results in a ReferenceError.