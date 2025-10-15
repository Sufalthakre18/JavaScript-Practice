// console.log() is a JavaScript debugging tool that prints output to the console, helping developers inspect variable values, program flow, and runtime behavior.
// console.log("jai shree ram");
// ---------------------
// variables 

// let username="jatin";
// const age=45;
// var email="jatin@gmai.com";
// let address;

// console.log(username);
// console.log(age);
// console.log(email);
// console.log(address);

// we prefer let const over var because They provide block scope, prevent accidental re-declaration, and avoid hoisting issues.
// -----------------------------------

// DataTypes and Echmascript

// primitive->stored by value, immutable.
// let name = "Jatin"; // String
// let age = 25; // Number
// let isStudent = true; // Boolean
// let city; // Undefined
// let car = null; // Null
// let bigNum = 9007199254740991n; // BigInt
// let sym = Symbol('id'); // Symbol uniqness

// Non-primitive → stored by reference, mutable.
// let user = { name: "Jatin", age: 25 }; // Object
// let marks = [90, 85, 80]; // Array
// function greet() { // Function
// return "Hello World";
// }


// console.log(typeof name); // string
// console.log(typeof age); // number
// console.log(typeof city); // undefined
// console.log(typeof car); // object (special case) It returns "object" — this is a long-standing bug in JavaScript.
// console.log(typeof bigNum); // bigint
// console.log(typeof sym); // symbol
// console.log(typeof user); // object
// console.log(typeof greet); // function

// *** undefined → variable declared but not assigned a value.

// ***null → explicitly assigned to represent empty or no value.
// ------------------------------------------------

// let a= Number.MAX_SAFE_INTEGER
// console.log(a);

// let b= 9007199254740991n
// let c= b+4n;
// console.log(c);


// console.log(typeof NaN);
// console.log(!!null);  it show true nature of true and falsy

// -----------------
// operators

// ternary operator
// ? :


// 4>22 ? console.log("good"): console.log("bad");
// instanceof is only use for reference value [] ,{}, function

// let points=60;

// let result = points>100? "gold":points>50? "silver":"bronze";
// console.log(result);

// -----------------

// let x = 5;
// console.log(x++); // prints 5
// console.log(x);   // now x = 6

// let y = 5;
// console.log(++y); // prints 6
// console.log(y);   // y = 6

// let a = 5;
// let b = a++;  // b = 5 (old value), a = 6
// console.log(a, b); // 6, 5

// let gg = 5;
// console.log(gg++ + ++gg);

// let num1 =87;
// let num2="67";

// console.log(num1 != num2) // compare values
// console.log(num1 !== num2) // compare values or types false or true --> true
// ---------------------

// Q1)

// function isInt(num) {
//   return num % 1 === 0;
// }

// console.log(isInt(4)); // true
// console.log(isInt(12.3)); // false
// console.log(isInt(0.3)); // false"

// NaN === NaN gives false

// ----------------------------------------

// control flow 
// early return pattern

// function getVal(val) {
//     if (val<25) return 'A';
//     else if (val<50) return 'B';
//     else if (val<70) return 'C';
//     else return 'D'
// }
// console.log(getVal(96));

// rock paper scissor problem

// function rps(user,comp) {
//     if (user===comp) return 'draw'

//     if (user==='rock' && comp==='scissor') return 'user';
//     if (user==='scissor' && comp==='paper') return 'user';
//     if (user==='paper' && comp==='rock') return 'user';

//     return 'computer'
// }

// console.log(rps('paper', 'scissor'))
 

// LOOPS 

// for (let i = 5; i > 0; i--) {
// console.log(i);
// }

// control flow
// for (1; 2; 4){
//     console.log(3);
// }
// ---------------

// for (i=1; i<=10;i++) {
//     console.log(i);
    
// }

// let j=10;
// while (j>0) {
//     console.log(j);
//     j--
// }

// ---------------
// for(i=2;i<21;i++){
//     if(i%2==0){
//          console.log(i);
//     }
   
    
// }

// i=1
// while (i<16) {
//     if (i%2===1) {
//         console.log(i);    
//     }
    
//     i++;
// }


// let sum=0
// for(i=1; i<=10;i++){
//     sum+=i  // sum= sum + i
// }
// console.log(sum);

// ------------------------------------

// function start() {
// let count =0;
//   console.log(count);
//   if (!count) count = 1;
//   count++;
//   console.log(count);
// }
// start();
// console.log(typeof count);

// ---------


// function swap(n1,n2){
//     [n1,n2]=[n2,n1]
//     return `n1 is ${n1} and n2 is ${n2}`
// }
// console.log(swap(4,6))

// let a = 5, b = 10;
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);

// function largest(n1,n2,n3) {
//     let result = (n1>n2 && n1>n3)? console.log(n1+"is largest"): (n2>n3 )? console.log(n2+"is largest"): console.log(n3+'is largest');
//     return result
// }
// largest(3,43,7)

// let a=8,b=6,c=9;
// let largest = a>b ?(a>c?a:c):(b>c?b:c);
// console.log("largest : ", largest);


