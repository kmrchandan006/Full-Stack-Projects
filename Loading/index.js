 

window.onload = function(){
    var hiddenElements =     document.getElementsByClassName("hidden");
    var shownElements = document.getElementsByClassName("shown");
    
//get shown elements' pos
const shownPos = [];
Array.from(shownElements).forEach((element) => {

const move = window.getComputedStyle(element);

const pos = move.getPropertyValue("left");

shownPos.unshift(pos);
})

//get hidden elements' pos
const hiddenPos = [];
Array.from(hiddenElements).forEach((element) =>{
const move2 = window.getComputedStyle(element);

const pos2 = move2.getPropertyValue("left");

hiddenPos.unshift(pos2);
})



//start shown elements' animation
var td = 1;

Array.from(shownElements).reverse().forEach((element) => {
    element.style.transition = `all 3s ease ${td}s`;
    element.style.left = "200%";
    td += 0.2;
})

//start hidden elements' animation

       var i = 0;
       var delay = 0;
       if(i < shownPos.length){
                 Array.from(hiddenElements).forEach((element) =>{              
              element.style.transition = `all 3s ease ${delay}s`;
              element.style.left = shownPos[i];
              i++;
              delay += 0.3;
          })
       }
       
      
//create new elemnts
var size = hiddenElements.length;
var dly = 1.5;
setTimeout(() => {
if(shownElements[0].style.left === "200%"){   
 Array.from(hiddenElements).forEach((element) =>{              
              element.style.transition = `all 3s ease ${dly}s`;
              element.style.left = "200%";
              dly += 0.3;
          })
       } 
       }, 3000);
           

for(let i = 0; i < 3; i++) {         
    var circle = document.createElement("div");
    circle.classList.add("circle", "hidden2");
    var parent = document.getElementById("container");
    parent.insertBefore(circle, parent.firstChild);
    }
    
    var hiddenElements2 = document.getElementsByClassName("hidden2");
    

setTimeout(() =>{
    let i = 0;
    let delay = 1.5;
    if(hiddenElements[0].style.left === "200%"){
    Array.from(hiddenElements2).forEach((element) =>{              
              element.style.transition = `all 3s ease ${delay}s`;
              element.style.left = shownPos[i];
              i++;
              delay += 0.3;
})
                 
}

}, 3000);

setTimeout(() => {
   let delay = 2; Array.from(hiddenElements2).forEach((element) =>{              
              element.style.transition = `all 3s ease ${delay}s`;
              element.style.left = "-200%";
              delay += 0.3;
})
}, 8000);


setTimeout(() => {
let td = 2;
let i = 0;
Array.from(hiddenElements).forEach((element) => {
    element.style.transition = `all 3s ease ${td}s`;
    element.style.left = shownPos[i];
    i++;
    td += 0.2;
})
}, 9000);


setTimeout(() => {
let td = 2;
let i = 0;
Array.from(hiddenElements).forEach((element) => {
    element.style.transition = `all 3s ease ${td}s`;
    element.style.left = "-200%"
    td += 0.2;
})
}, 15000);


setTimeout(() => {
let td = 2;
let i = 0;
Array.from(shownElements).forEach((element) => {
    element.style.transition = `all 3s ease ${td}s`;
    element.style.left = shownPos[i];
    i++;
    td += 0.2;
})
}, 16000);

var circles = document.getElementsByClassName("circle");
let d = 2.5;
Array.from(circles).forEach((element) => {
    element.style.animationDelay = `${d}s`;
    d += 0.5;
})

    

    }


