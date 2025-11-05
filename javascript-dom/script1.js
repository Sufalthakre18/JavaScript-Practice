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


