let notifications =document.querySelectorAll(".notifs");
let allRead= document.querySelector(".one p");
let number = document.querySelector("h1 span");


notifications.forEach(el=> {
    el.addEventListener("click",function(e){
       
          if(el.classList.contains("gray")){
            el.classList.remove("gray");
            el.classList.add("toggle");
            number.innerText= (parseInt(number.innerText))-1 ;
          }
} 
    
 
)
});




allRead.addEventListener("click",function(e){
    notifications.forEach(el=> {
        el.classList.add("toggle");
        number.innerText= "0";

    })
})

