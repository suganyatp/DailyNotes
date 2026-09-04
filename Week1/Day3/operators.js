/* Operators -  */

let x=20, y=5

//Arithmetic Operators

/* console.log(x+y); //25
console.log(x-y); //15
console.log(x*y); //100
console.log(x/y); // 20/5 = 4 (Quotient)
console.log(x%y); // 20%5 = 0 (Reminder) */

// Assignment Operators

/* console.log(x+=5); // x=x+5 => 20+5=25 is the NEW value of x
console.log(x-=3); // x=x-3 => 25-3=22
console.log(x*=2); // x=x*2 => 22*2=44
console.log(x/=2); // x=x/2 => 44/2=22
console.log(x%=2); // x=x%2 => 22%2=0 
console.log(x); // 0 */


// Comparison Operators = Return type is going to be boolean

// console.log(x>y); // new value of x is 0, 0>5, returns false
// console.log(x<y); // new value of x is 0, 0>5, returns false

// Strict equality (===) Checks both datatype and value

console.log(1==='1'); //false
console.log(1===1); //true

// Loose equality (==) Checks ONLY the value
//coerction -> type conversion
console.log(1=='1'); //true
console.log(1==true); //true
console.log(null==undefined); //true

// Logical Operators
//AND (true && true), OR(true || false), NOT (!true)

a=2,b=6
console.log(a>b && b>a); // (false && true) = false
console.log(a<b && b>a); // (true && true) = true

console.log(a>b || b>a); // (false || true)=true
console.log(!(a>b)) //true

// Unary Operators = works on single operand (single variable)

//pre-increment, pre-decrement, post-increment, post-decrement

let z=5

//pre-increment = Increment first, then use
console.log(++z); //z+1=5+1=6
console.log(z); //6

//post-increment = Use first, then increment
console.log(z++); //6
console.log(z); //z+1=6+1=7

//pre-decrement = Decrement first, then use
console.log(--z); //z-1=7-1=6
console.log(z); //6

//post-decrement = Use first, then decrement
console.log(z--); //6
console.log(z); //z-1=6-1=5