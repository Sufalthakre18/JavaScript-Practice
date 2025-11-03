// selecting elements

// let el=document.getElementById('abc')
// console.log(el);
// console.dir(el);

// let el=document.getElementsByClassName('abc')
// console.log(el);
// console.dir(el);

// let el=document.querySelectorAll('h1')
// console.log(el);
// console.dir(el);

// let el=document.querySelector('h1')
// console.log(el);
// console.dir(el);
// --------------------------

// DOM  TREE STRUCTURE: Node,Element,Text,Comment
// -----------------------

// let h1= document.querySelector('h1')
// console.log(h1);

// h1.innerText="Jai shree ram"
// h1.textContent="Jai hanuman"
// h1.innerHTML='<i>jai rajputana<i/>'
// ---------------------------

// getAttribute, removeAttribute, setAttribute
// let img=document.querySelector('img')
// img.setAttribute('src','https://english.cdn.zeenews.com/sites/default/files/2023/03/03/1162130-fpvc3scaiaat6fw.jpg')
// img.removeAttribute('alt')
// console.log(img.getAttribute('src'));
 
// ---------------------------
// createElement, append, prepend,appendChild,remove
// let h2=document.createElement('h2')
// h2.innerText="safety"
// document.querySelector('div').append(h2)
// document.querySelector('div').prepend(h2)
// document.querySelector('div').appendChild(h2)
// document.querySelector('div').remove()

// --------------------------------

// .style, .classList (add. remove, toggle)

// let div=document.querySelector('div')
// let h1= div.querySelector('h1')
// h1.style.color="red"
// h1.style.textAlign="center"
// h1.style.textTransform="Capitalize"
// h1.style.background="grey"

// h1.classList.add('mag')
// h1.classList.remove('mag')
// h1.classList.toggle('mag')

// --------------------------------

// let el= document.querySelector('.mag')
// let el= document.querySelector('#mag')
// let el= document.querySelector('h1')
// el.style.color='blue'

// --------------------------

// let li=document.querySelectorAll('li')
// li.forEach((val)=>{
//     console.log(val.textContent);
    
// })
 
// for(let i=0;i<li.length;i++){
//     console.log(li[i].innerText);
    
// }

// ----------------

// let h1=document.querySelector('h1')
// h1.setAttribute('title',"GODs slogan")

// let div=document.querySelector('div')
// let img=document.createElement('img')
// img.setAttribute('src','https://eminem.news/wp-content/uploads/2020/12/epro-news-235.jpg')
// div.prepend(img)

// img.classList.add('place')

// -----------------------

// let li=document.querySelectorAll('ul li:nth-child(2n)')
// li.forEach((el)=>{
//     el.style.color='pink'
//     el.classList.add('mag')
// })

// -----------------------
// CLICK LISTENER
// event and eventlistener
// Element.addEventListener("event name",function(){})

// let h1= document.querySelector('h1')

// function dbclick(){
//     h1.style.backgroundColor='pink'
// }
// h1.addEventListener('dbclick',dbclick)

// YOU CAN NOT MEMORIZE WHOLE EVENTLISTENER SO YOU NEED TO DO GPT BECAUSE THERE ARE LOT OF EVENT LISTENER

// ---------------------
// INPUT LISTENER
// let inp= document.querySelector('input')

// inp.addEventListener('input',function(detls){
//     console.log(detls);
    
// })

// inp.addEventListener('input',function(detls){
//     console.log(detls.data);
    
// })
// inp.addEventListener('input',function(detls){
//     if(detls.data!==null) console.log(detls.data);
    
// })
// --------------------

// let h1= document.querySelector('h1')
// let select=document.querySelector('select')
// select.addEventListener('change',(detls)=>{
//     let car=detls.target.value
//     h1.textContent=`${car.toUpperCase()} car selected`
    
// })

// -------------------------

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


h1=document.querySelector('h1')
window.addEventListener('keydown',(detls)=>{
    if(detls.key===' ') h1.textContent='SPC'
    else h1.textContent=detls.key
    h1.style.color=`${getRandomColor()}`
    
    
    
})