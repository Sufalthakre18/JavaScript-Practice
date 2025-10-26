
// function score(...val){
//     let sum=0
//     val.forEach(function(val){
//         sum+=val
//     })
//     return sum;
// }
// console.log(score(2,4,5,6,2,4))

// -----------------------

// BMI CALCULATOR 

// function BMI(weight,height){
//     BMI=weight/(height**2)
//     console.log(BMI)
//     if(18.5<BMI) return "Underweight"
//     if(18.5<=BMI<=24.9) return "NormalWeight"
//     if(25<=BMI<=29.9) return "Overwieght"
//     return "Obese"
    
// }

// console.log(BMI(54,1.72))

// ----------------------
// reusable dicount function

// function discount(discount){
//     return function(price){
//         return price-price*(discount/100)
//     }
// }

// let ten = discount(10)
// console.log(ten(1000));
// let twenty =discount(20)
// console.log(twenty(200));

// --------------------------------------
// CLOUSERS CONCEPT
// function counter(){
//     let count =0
//     return function(){
//         count++
//         return count
//     }
// }

// let c= counter()
// console.log(c());
// console.log(c());
// console.log(c());

// let d= counter()
// console.log(d());
// console.log(d());
// console.log(d());

// ---------------------
// IIFE

// (function(){
//     let str="jai shree ram"
//     console.log(str);
// })();

// clousers return function through function but use parent function variable
// higher order function return function

// ---------------------------
// ARRAYS

// let fruits=["mango","apple"]

// let newFruits=fruits.splice(1,0,"grapes","papaya")
// console.log(fruits);

// ----------------------

// let obj={
//     name:"masoom sharma",
//     age:34,
//     address:{
//         city:"haryana"
//     }
// }

// let obj2={...obj}

// console.log(obj);
// console.log(obj2);

// obj2.address.city="Jaipur"

// console.log(obj);
// console.log(obj2);

// it is changing nested object also becasue if nested object present then it give reference of that object
// SO WE USE DEEP CLONE

// let newObj=JSON.parse(JSON.stringify(obj))
// console.log(newObj);
// newObj.address.city="jaipur"
// console.log(obj);

// ------------------
// optional chainning

// let obj={
//     name:"masoom sharma",
//     age:34,
//     addresss:{
//         city:"haryana"
//     }
// }

// console.log(obj.address.city)

// so avoid error we use optional chainning ? 

// console.log(obj?.address?.city) //undefined

// ---------------
// let course={
//     title:"js",
//     duration:6384,
// }

// let cour=Object.entries(course)
// console.log(cour);
// Object.entries(course).forEach(function(val){
//     console.log(`${val[0]} -> ${val[1]}`);
    
// })



// function processArray(arr) {
//   console.log("Original array:", arr);

//   arr.sort((a, b) => a - b);
//   console.log("Sorted array in ascending order:", arr);

//   const reversedArray = [...arr].reverse();
//   console.log("Reversed sorted array:", reversedArray);

//   const maxValue = Math.max(...arr);
//   console.log("Maximum value in the array:", maxValue);

//   const minValue = Math.min(...arr);
//   console.log("Minimum value in the array:", minValue);

//   const sortedCopy = [...arr];
//   console.log("Sorted copy of the original array:", sortedCopy);

//   return {
//       originalArray: arr,
//       sortedArray: arr,
//       reversedArray: reversedArray,
//       maxValue: maxValue,
//       minValue: minValue,
//       sortedCopy: sortedCopy
//   };
// }

// const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5];
// console.log(processArray(arr));



// const newObj={
//     "first-name":"sidhu",
//     city:"Bhopal",
//     age:{
//         teenagee:true,
//     }

// }

// console.log(newObj?.City);


// let obj={
//     name:"masoom sharma",
//     age:34,
//     addresss:{
//         city:"haryana"
//     }
// }

// let {city}=obj.addresss
// let {age}=obj

// console.log(city);
// console.log(age);

// const newObj={
//     "first-name":"sidhu",
//     city:"Bhopal",
//     age:{
//         teenagee:true,
//     }
// }

// let {"first-name" :firstName}=newObj
// console.log(firstName);


// const dataOfCompnay={
//     owner:"sidhu moosewala",
//     salary:"56k",
//     hobby:"singing",
//     address:{
//         city:"panjab"
//     }
// }

// Object.entries(dataOfCompnay).forEach((val)=>{
//     console.log(val[0]+' : '+ val[1]);
    
// })


// shallow copy
// const singer={...dataOfCompnay}
// console.log(singer);
// singer.address.city="haryana"
// console.log(dataOfCompnay);


// deep clone 

// const singer=JSON.parse(JSON.stringify(dataOfCompnay))
// console.log(singer);
// singer.address.city="haryana"
// console.log(singer);
// console.log(dataOfCompnay);



// ----------------


// const user={
//     firstName:"Sufal",
//     lastName:"Thakre",
//     printFullName:function(){
//         console.log(`My name is ${this.firstName} ${this.lastName} and my age is `);
        
//     }
// }

// user.printFullName()

// const user2={
//     firstName:"Andrew",
//     lastName:"Tate",
// }

// user.printFullName.call(user2,45)



// const user = {
//     firstName: "Sufal",
//     lastName: "Thakre",
// }


// let printFullName = function (age,color) {
//     console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${age}`);
//     console.log(`My favorite color is ${color}`);
    

// }

// printFullName.call(user,22,"rose")

// const user2 = {
//     firstName: "Andrew",
//     lastName: "Tate",
// }

// printFullName.call(user2,39,"pink")



// const user = {
//     firstName: "Sufal",
//     lastName: "Thakre",
// }


// let printFullName = function (age,color) {
//     console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${age}`);
//     console.log(`My favorite color is ${color}`);
    

// }

// printFullName.apply(user,[22,"rose"])

// const user2 = {
//     firstName: "Andrew",
//     lastName: "Tate",
// }

// printFullName.apply(user2,[39,"pink"])



// const user = {
//     firstName: "Sufal",
//     lastName: "Thakre",
// }


// let printFullName = function (age,color) {
//     console.log(`My name is ${this.firstName} ${this.lastName} and my age is ${age}`);
//     console.log(`My favorite color is ${color}`);
    

// }

// const printName=printFullName.bind(user,22,"rose")
// console.log(printName);
// printName()


// const user2 = {
//     firstName: "Andrew",
//     lastName: "Tate",
// }

// let printName2=printFullName.bind(user2,39,"pink")
// printName2()

// arrow functions does not have their own this, it retains the value of this of enclosing lexical context

// const obj={
//     x:45,
//     y:()=>{
//         console.log("it points global scope");
        
//         console.log(this);
        
//     }
// }
// const obj={
//     x:45,
//     z:function(){
//         console.log(this);
        
//         const y=()=>{
//         console.log("it points object scope");
//         console.log(this);
        
//     }
//     y()
//     }
// }

// obj.z()


// every js object has a special property attached to it which is called as prototype

// prototype chainning
// mydate =new Date()
// mydate--->Date.prototype--->Object.prototype--->null

// const arr=[3,56,63,64,2]
// console.log(Object.getPrototypeOf(arr));
// console.log(arr.__proto__);

// console.log(arr.__proto__.__proto__.__proto__);
// In JavaScript, when an object does not have a particular property, the JavaScript engine looks for the property next in the prototype chain of the object. This process continues recursively until the property is found or until the end of the prototype chain is reached. If the property is not found in the prototype chain, then the property is considered undefined for that object.