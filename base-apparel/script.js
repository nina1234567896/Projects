

let emailErrorIcon = document.querySelector(".email-error");
let submit = document.querySelector("#error-icon");
let form = document.querySelector("form");
let errorMessage = document.querySelector(".error-message");
let input = document.querySelector(".email");

console.log(errorMessage);
form.addEventListener("submit", function(e){
    if(input.value.length>=15){
      if(!input.value.includes("@") && !input.value.includes(".")){
        e.preventDefault();
        errorMessage.style.display ="block";
        emailErrorIcon.style.display="block";
        input.style.border ="1px solid red";
      }
    
    }else {
        e.preventDefault();
        errorMessage.style.display ="block";
        errorMessage.innerHTML ="Email should be longer than 13 characters";
        errorMessage.style.paddingLeft="3rem";
        emailErrorIcon.style.display="block";
        input.style.border ="1px solid red";
    }



}



);
