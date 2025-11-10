
// ----------------------------------------------------------------------
// const promiseOne = new Promise(function(resolve, reject){
//     //Do an async task
//     // DB calls, cryptography, network
//     setTimeout(function(){
//         console.log('Async task is compelete');
//         resolve()
//     }, 1000)
// })

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task 2");
//         resolve()
//     }, 1000)

// }).then(function(){
//     console.log("Async 2 resolved");
// })

// const promiseThree = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({username: "Chai", email: "chai@example.com"})
//     }, 1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
// })

// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "hitesh", password: "123"})
//         } else {
//             reject('ERROR: Something went wrong')
//         }
//     }, 1000)
// })

//  promiseFour
//  .then((user) => {
//     console.log(user);
//     return user.username
// }).then((username) => {
//     console.log(username);
// }).catch(function(error){
//     console.log(error);
// }).finally(() => console.log("The promise is either resolved or rejected"))



// const promiseFive = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "javascript", password: "123"})
//         } else {
//             reject('ERROR: JS went wrong')
//         }
//     }, 1000)
// });

// async function consumePromiseFive(){
//     try {
//         const response = await promiseFive
//         console.log(response);
//     } catch (error) {
//         console.log(error);
//     }
// }

// consumePromiseFive()

// // async function getAllUsers(){
// //     try {
// //         const response = await fetch('https://jsonplaceholder.typicode.com/users')

// //         const data = await response.json()
// //         console.log(data);
// //     } catch (error) {
// //         console.log("E: ", error);
// //     }
// // }

// //getAllUsers()

// fetch('https://api.github.com/users/hiteshchoudhary')
// .then((response) => {
//     return response.json()
// })
// .then((data) => {
//     console.log(data);
// })
// .catch((error) => console.log(error))


// --------------------------------------------


// let pr =new Promise(function(res,rje){
//     setTimeout(() => {
//         let rn=Math.floor(Math.random()*10)
//         if(rn>5) res("resolved with"+rn);
//         else rje("rejected with"+rn);
//     }, 3000);
// })

// pr
// .then(function(value){
//     console.log(value);
    
// })
// .catch(function(error){
//     console.log(error);
    
// })
// .finally(function(){
//     console.log("Promise is settled");
// })


// fetch('https://randomuser.me/api/?results=5')
// .then((res)=>res.json())
// .then((data)=>console.log(data.results));

// ---------------------------
// The event loop in JavaScript is responsible for managing asynchronous operations, ensuring that they are executed in the correct order and avoiding blocking the main thread.

// The call stack in the event loop keeps track of function calls and their contexts, ensuring that functions are executed in the correct order and that the correct execution context is maintained.

// The Promise.resolve() method is used to add a task to the microtask queue in JavaScript.

// ---------------------------

// function createMessage(username){ 

    
//     setTimeout(()=>{
//         const message = `Welcome ${username}`;
//         return message;
//     },2000)
// }

// function displayMessage(message){
//     console.log(message);
// }

// const userMessagePromise = createMessage('Chai')
// displayMessage(userMessagePromise)


// TO FIX THE ABOVE PROBLEM OF UNDEFINED MESSAGE WE USE CALLBACKS

// function createMessage(username, callback){ 
//     console.log("hii");
    
//     setTimeout(()=>{
//         const message = `Welcome ${username}`;
//         callback(message);
//     },2000)
// }

// function displayMessage(message){
//     console.log(message);
// }

// createMessage('Chai', displayMessage)

// --------------------------------------------------

// Callback Hell and Pyramid of Doom

// function firstFunction(val,callback){
//     setTimeout(()=>{
//        result= val + 1
//          callback(result)
//     },1000)
// }

// function secondFunction(val,callback){
//     result1= val + 2
//     callback(result1) 
// }

// function thirdFunction(val,callback){
//     result2= val + 3
//     callback(result2)
// }

// // function doOperations(){
// //     let result=0;
// //     result=firstFunction(result);
// //     result=secondFunction(result);
// //     result=thirdFunction(result);
// //     console.log("result ",result);
// // }
// // doOperations()

// // The above code will not work as expected because firstFunction is asynchronous
// // To fix this we can use Callbacks but it will lead to Callback Hell

// function doOperations(){
//     firstFunction(0,(result)=>{
//         secondFunction(result,(result1)=>{
//             thirdFunction(result1,(result2)=>{
//                 console.log("result ",result2);
//             })
//         })
//     })
// }

// doOperations()
// // To avoid Callback Hell we can use Promises
// // A callback function in JavaScript is a function passed as an argument to another function, to be executed later, typically after some asynchronous operation has completed.
// // Asynchronous programming grants a multitasking superpower to code, enabling programs to execute multiple tasks concurrently.
// // It enhances efficiency and responsiveness by allowing programs to perform various operations simultaneously, akin to multitasking in real life
// // Tasks can progress independently without waiting, leading to improved utilization of resources and faster overall execution times
// // The await keyword is used to pause the execution of an async function until the promise returned by a promise-based function is settled (either resolved or rejected). It allows the code to wait for the promise to be fulfilled and then continue with the execution, effectively making asynchronous code appear synchronous.
// -------------------------------------------------

// let firstObject = fetch('https://dummyjson.com/products/1')
//                        .then(response => response.json())

// let secondObject = fetch('https://dummjson.com/users/1')
//                         .then(response => response.json())

// let thirdObject = fetch('https://dummyjson.com/posts/1')
//                         .then(response => response.json())                      

// Promise.all([firstObject,secondObject,thirdObject])
//          .then((values)=>{
//             for (let value of values){
//                 console.log(value);
                
//             }
//          })
//          .catch((err)=>console.log("Error found : ", err))

// Promise.any([firstObject,secondObject,thirdObject])
//             .then((value)=>{
//                 console.log(value);
//             })
//             .catch((err)=>console.log("Error found : ", err))
// ---------------------------------------------------


// async function fetchUsers(){
//     try {
//         let response =await fetch('https://dummyjson.com/users/2')
//         let data =await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("Error ",error);
        
//     }
// }

// fetchUsers()

// ------------------------------------------------------
