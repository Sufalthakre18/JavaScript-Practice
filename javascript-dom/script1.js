// setInterval,setTimeout,clearInterval,clearInterval

// setTimeout(() => {
//     console.log('Glory to Hanuman');
    
// }, 3000);
// let tO=setTimeout(() => {
//     console.log('Glory to Hanuman');
    
// }, 3000);
// clearTimeout(tO)

// let tI=setInterval(()=>{
//     console.log('Glory to Ram');
    
// },3000)

// clearInterval(tI)


// -------------------------------

// let count=10

// let interval=setInterval(()=>{
//     if(count >= 0) {
//         console.log(count);
//         count--;
//     }
//     else clearInterval(interval)
// },1000)

// ---------------

// let bar=document.querySelector('.progress-filler')
// let count=0
// let seconds=5


// let start= document.querySelector('#startButton')
// let cancel= document.querySelector('#cancelButton')
// start.addEventListener('click',()=>{
//     let Interval =setInterval(() => {
//     if(count<=99){
//         count++;
//         bar.style.width=`${count}%`
//         document.querySelector('#progressText').textContent=`${count}%`
//     }
//     else{
//         document.querySelector('#progressStatus').textContent='Downloaded'
//         clearInterval(Interval)
//     }

//     cancel.addEventListener('click',()=>{
//     bar.style.width=`0%`
//     document.querySelector('#progressStatus').textContent='Downloading..'
//     count=0
//     document.querySelector('#progressText').textContent=`${count}%`
//      clearInterval(Interval)
// })
// }, (seconds*1000)/100);
// })

// ------------------------------------

// localStorage

// localStorage.setItem('name','ram')

// console.log(localStorage.getItem('name'));

// localStorage.removeItem('name')

// localStorage.clear()


// sessionStorage

// sessionStorage.setItem('name','ram')

// console.log(sessionStorage.getItem('name'));

// sessionStorage.removeItem('name')

// sessionStorage.clear()

// Cookie- see on browser console

// document.cookie="username=jai shree ram; age=25"


// localStorage.setItem('friends',['ram','shyam','mohan'])
// localStorage.setItem('friends',JSON.stringify(['ram','shyam','mohan']))

// let friends=JSON.parse(localStorage.getItem('friends'))
// console.log(friends);


// --------------------------
// Theme switcher

// function applyTheme(theme){
//     document.body.classList.remove('light','dark')
//     document.body.classList.add(theme)
// }

// function getSystemTheme(){
//     return window.matchMedia('(prefers-color-scheme: dark)').matches
//     ? 'dark'
//     : 'light'
// }

// function setIntialTheme(){
//     const savedTheme=localStorage.getItem('theme')
//     applyTheme(savedTheme || getSystemTheme())
// }

// setIntialTheme()

// window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change',
//     ()=>{
//         if(!localStorage.getItem('theme')){
//             applyTheme(getSystemTheme())
//         }
     
//     }
// )

// document.querySelector('button').addEventListener('click',()=>{
//     const curentTheme=document.body.classList.contains('dark')
//     ? 'dark'
//     : 'light'

//     const newTheme=curentTheme==='dark'?'light':'dark'
//     applyTheme(newTheme)
//     localStorage.setItem('theme',newTheme)
// })

// ---------------------------------

