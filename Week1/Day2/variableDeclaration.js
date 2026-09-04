// var is keyword to declare a variable

// Declaration + Assignment = Initialization

var courseName="Playwright" //declaration1
var courseName="Selenium" //re-declaration allowed in var keyword

console.log(courseName);
console.log(typeof courseName);


courseName=null //reassignment allowed in var keyword
console.log(courseName);
console.log(typeof courseName);

// let = redeclaration is NOT allowed

let salary=50000
// let salary=40000 // redeclaration is NOT allowed

salary="30000"
console.log(salary); // reassignment is possible
console.log(typeof salary);


//const = final and fixed. Cannot change. 

const pi=3.14
// const pi=2.76 // redeclaration is NOT allowed

pi="pi value"
console.log(pi); // TypeError: Assignment to constant variable