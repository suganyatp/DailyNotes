/* Scoping - Accessibility or visibiity of the variable

1. Global Scope
2. Function scope
3. Block scope

 */

/* var is function-scoped.
Ex - 1 
function testVar() {
  if (true) {
    var x = 10;
  }
  console.log(x); // ✅ 10 (accessible outside the block)
}
testVar();

let and const are block-scoped, but within function.
Ex - 2
function testLet() {
  if (true) {
    let y = 20;
    console.log(y); // ✅ 20
  }
  console.log(y); // ❌ ReferenceError, because, y is only accessible inside the if block.
}
testLet();

Ex - 3
function testConst() {
  const z = 30;
  console.log(z); // ✅ 30
  z = 40; // ❌ TypeError: Assignment to constant variable
}
testConst();
*/

// global variable
var genderType="female"

function employee() {
if (genderType=="female") {
// Block scoped variable   
    let name="Suganyaa" // Block Scope
    const age=34 // Block Scope
    var occupation="QA" // Function Scope
    console.log("The name inside the if block", name);
    console.log("The age inside the if block", age);
    console.log("The occupation inside the if block", occupation);
}
// console.log("The name outside the if block", name); //ReferenceError: name is not defined
// console.log("The age outside the if block", age); //ReferenceError: age is not defined
console.log("The occupation outside the if block and inside the function block", occupation);
}
//console.log("The occupation outside the if block and outside the function block", occupation); // ReferenceError: occupation is not defined

employee()