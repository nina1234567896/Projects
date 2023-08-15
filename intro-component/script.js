

const form = document.querySelector("form");
const firstName = document.querySelector(".First-Name");
const LastName = document.querySelector(".Last-Name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const  submit = document.querySelector("button");
const errorMessage = document.querySelectorAll(".error-message");
const errorIcon= document.querySelectorAll("img")
const inputs = document.querySelectorAll("input");
  form.addEventListener("submit" ,function(e){

   

       if(firstName.value ==""){
        e.preventDefault();
        errorMessage[0].style.display="block";
        errorIcon[0].style.display="block";
        firstName.style.border="1px solid red";

          }   
       else if(LastName.value ==""){
        e.preventDefault();
        errorMessage[1].style.display="block";
        errorIcon[1].style.display="block";
        LastName.style.border="1px solid red";
        }
        else if(!email.value.includes("@") || !email.value.includes(".")){
        e.preventDefault();
        errorMessage[2].style.display="block";
        errorIcon[2].style.display="block";
        email.style.border="1px solid red";
         }
       else if(password.value ==""){
        e.preventDefault();
        errorMessage[3].style.display="block";
        errorIcon[3].style.display="block";
        password.style.border="1px solid red";
         }

        
  })

