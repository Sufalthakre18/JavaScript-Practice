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

// you can take input in two main ways depending on where your code runs:
// 1st

// const readline = require("readline").createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question("Enter your name: ", (name) => {
//   console.log("Hello " + name);
//   readline.close();
// });

// 2nd in browser using prompt()

// let name = prompt("Enter your name:");
// console.log("Hello " + name +" Jai shree Ram");

// ---------------------

// practice qs

// console.log(`${45*2-10}`);

// const date= new Date()
// console.log(date);

// let FirstName="sidhu"
// let lastName="Moosewala"
// lastName="legend"
// console.log(FirstName+' '+lastName);


// var a= "shikari";
// console.log(a);
// a="top de";

// console.error("Baapu ne sikhai menu gal ek hi ");

// console.log(12**(0.5));

// let val=true
// console.log(typeof val);

// let age=2
// if (age>=22) console.log("Yes you are man");
// else console.log("You are kid");
    
// console.log(100/0);
// ------------------------
// const PI=3.14
// console.log(PI);

// let str= "jai shree ram";
// slogan="Jai Shree Ram"
// console.log(slogan);

// console.log(typeof null);

// var don=NaN;
// console.log(typeof don);


// const arr = [2,4,6,8,10]
// arr=[1,2,3,45]
// console.log(arr);

// for (let i = 0; i <= 50; i++) {
//     process.stdout.write(i + " ");
// }


// let sum=0;
// let i=0;
// while (i<=10){
//     sum+=i;
//     i=i+1
// }
// console.log(sum);

// let lang="Javascript";
// for (const element of lang) {
//     console.log(element);
    
// }

// for(let i=1;i<=20;i++){
//     if(i%2==0) continue;
//     console.log(i);
// }

// let i=5
// do {
//     console.log(i);
//     i--;
// } while (i>=1);

// let fact=1;
// for(let i=5;i>=1;i--){
//     fact*=i
//     console.log(i);
    
// }
// console.log("factorial of 5 is ",fact);

// let grid=""
// for(let i=0;i<3;i++){
//     for(let i=0;i<3;i++){
        
//         grid+=i + " "
        
//     }
//     grid+='\n'
// }
// console.log(grid);


// let hold=1;
// for(let i=1;i<=3;i++){
//     let str=''
//     for (let j=1;j<=3;j++) {
//         str+=hold + ' '
//         hold++
//     }
//     console.log(str);
    
// }


// let hold1 = 1;
// for (let row = 1; row <= 3; row++) {
//   console.log(`${hold1++} ${hold1++} ${hold1++}`);
// }


// const arr=[1,2,3,5,6,7]
// const newarr=[]
// for(let i=0;i<arr.length;i++){
//    newarr.push(arr[arr.length-1-i])
// }
// console.log(newarr);


// const newarr = [...arr].reverse();
// console.log(newarr);

// let i=1
// while (i<=100) {
//     if (i%5===0){
//         console.log(i);
//     }
//     i++;
// }


// const Obj={name:"janni",age:50,profession:"singing"}
// for (const key in Obj) {
//     console.log(key+' :- '+Obj[key]);
    
    
// }

// let arr=[1,2,3,4,5,6,7]
// for(let i=0;i<Math.floor(arr.length/2);i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr);


// const Ratings=[5,4,3,2,1]
// const newRat=[10,20,30,40,50]

// Ratings.unshift(6,7)
// Ratings.pop()
// let el=Ratings.slice(0,3)
// console.log(el);
// console.log(Ratings.indexOf(4));
// console.log(Ratings.includes(3));
// console.log(Ratings.concat(newRat));
// console.log(Ratings.sort());


// bubble sort

// const Ratings=[5,4,3,2,1]
// for(let j=0;j<Ratings.length-1;j++){
//     for(let i=0;i<Ratings.length-j-1;i++){
//         if (Ratings[i]>Ratings[i+1]) {
//             let Temp=Ratings[i]
//             Ratings[i]=Ratings[i+1]
//             Ratings[i+1]=Temp
//         }
//     }
// }

// console.log(Ratings);

// ----------------

// Internshala coding practice 

// let arr= [1,2,[33,44,[555,666], 77],8 ]

// let num=arr[2][2][0]
// console.log(num);


// let a = "Samarth Vohra      "
// let b = "Samarth Vohra"

// console.log(a.trim().toUpperCase());


// var a = 10;
// function abc(){
//     console.log(a)
//     var a = 200;
// }
// abc()

// let num=1
// do {
//     console.log(num);
    
//     num++
// } while (num<=100);

// console.log(typeof NaN);

// function CheckNum(num) {
//     if (num%2===1) return "this is odd Number"
//     return "Even number"
// }
// console.log(CheckNum(9));

// function areaOfCir(radius) {
//     return `The area of Circle is ${(Math.PI*radius*radius).toFixed(4)}`
    
// }

// console.log(areaOfCir(4));

// function Sum(arr){
//     return arr.reduce((acc,curr)=>{
//         acc= acc+ curr
//         return acc
//     },0)
// }
// console.log(Sum([1,2,3,4,5]));


// function Checker(str,char){
//     return str.toLowerCase().startsWith(char.toLowerCase())
// }

// console.log(Checker("Jai shree ram","K"));

// function fact(num) {
//     return num<1 ? 1 :num * fact(num-1)
// }
// console.log(fact(5));

// function fact(num){
//     if (num<1)return 1
//     let fac=1
//     for(let i=1;i<=num;i++){
//         fac*=i
//     }
//     return fac
// }
// console.log(fact(5))


// function Reverse(str) {
//     result=''
//     for(i=0;i<str.length;i++){
//         result+=str[str.length-1-i]
//     }
//     return result
// }
// console.log(Reverse('jamanapar'));

// function Reverse(str) {
//     return str.split('').reverse().join('')
// }
// console.log(Reverse('jamanapar'));

// function largest(arr){
//     let newarr=arr.sort((a,b)=>{ return a-b}).reverse()
//     return newarr[0]
// }
// console.log(largest([1,2,38,5,36,75,93]));


// function largest(arr) {
//     let max=arr[0]
//     for(let i=1;i<arr.length;i++){
//         if (arr[i]>max) {
//             max=arr[i]
//         }
//     }
//     return max
// }
// console.log(largest([1,2,38,5,36,75,93]));