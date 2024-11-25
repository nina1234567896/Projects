let hamburger= document.querySelector(".hamburger");
let list = document.querySelector(".menu");
let listExit= document.querySelector(".menu p");

let blurScreen =document.querySelector(".test");

let bookmark = document.querySelector("#bookmark");
let bookmarkText= document.querySelector("#bookmark #bookmark-text");
let bookmarkCircle = document.querySelector("#bookmark svg circle");
let bookmarkPath = document.querySelector("#bookmark svg path");
let bookmarked=false;

let BackThisProject = document.querySelector("#one button");
let modalDefault=document.querySelector("#modal-default");
let mmodalExit=document.querySelector("#modal-default svg");

let checkbox =document.querySelectorAll(".checkbox");
let enterPledge=document.querySelectorAll("#modal-default .enter-pledge");
let checked =false;

let continueButton = document.querySelectorAll(".stand button");
let modalSuccess =document.querySelector("#modal-success");
let gotItButton = document.querySelector("#modal-success button");
console.log(enterPledge);

hamburger.addEventListener("click",function(e){
   list.classList.toggle("display");
   hamburger.style.display="none";
    blurScreen.classList.toggle("display");
   
    
})

listExit.addEventListener("click",function(e){
    list.classList.toggle("display");
    hamburger.style.display="block";
     blurScreen.classList.toggle("display");

})

bookmark.addEventListener("click",function(){
 if(bookmarked==false){
    bookmarkText.innerText ="Bookmarked";
    bookmarkText.style.color="hsl(176, 72%, 28%)";
    bookmarkCircle.style.fill="hsl(176, 72%, 28%)";
    bookmarkPath.style.fill="white";
    bookmarked=true;
 } else if(bookmarked==true){
    bookmarkText.innerText ="Bookmark";
    bookmarkText.style.color="black";
    bookmarkCircle.style.fill="#2F2F2F";
    bookmarkPath.style.fill="#B1B1B1";
    bookmarked=false;
 }
})

BackThisProject.addEventListener("click",function(e){
   blurScreen.classList.toggle("display");
   modalDefault.classList.toggle("display");
})

mmodalExit.addEventListener("click",function(){
   blurScreen.classList.toggle("display");
   modalDefault.classList.toggle("display");
})

checkbox.forEach((el,i)=>{
   el.addEventListener("input",function(){
      if(checked==false){
      enterPledge[i-1].style.display="flex";
      checked=true;
      } else if(checked==true){
         enterPledge[i-1].style.display="none";
         checked=false;
      }
   })
})

continueButton.forEach((el,i)=>{
   el.addEventListener("click",function(){
      modalDefault.classList.toggle("display");
      modalSuccess.classList.toggle("display");
   
   })

   })

   gotItButton.addEventListener("click",function(){
      blurScreen.classList.toggle("display");
      modalSuccess.classList.toggle("display");
   })