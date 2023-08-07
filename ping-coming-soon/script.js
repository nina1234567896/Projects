let form = document.querySelector(".form");
let input= document.querySelector("#email");
let submit = document.querySelector("button");
let errorMessage = document.querySelector(".error-message")

form.addEventListener("submit", function(e){
   if(!input.value.includes("@") || !input.value.includes(".")){
      e.preventDefault();
      input.style.border ="1px solid red";
      errorMessage.style.display ="block";
    console.log(e);
    }
    })