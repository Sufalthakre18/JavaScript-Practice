
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

let obj={
    name:"masoom sharma",
    age:34,
    addresss:{
        city:"haryana"
    }
}

// console.log(obj.address.city)

// so avoid error we use optional chainning ? 

// console.log(obj?.address?.city) //undefined

// ---------------
let course={
    title:"js",
    duration:6384,
}

let cour=Object.entries(course)
console.log(cour);
Object.entries(course).forEach(function(val){
    console.log(`${val[0]} -> ${val[1]}`);
    
})
