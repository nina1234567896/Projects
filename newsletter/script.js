const form= document.querySelector("form");
const email=document.querySelector(".email");
const submit = document.querySelector(".submit")
const success= document.querySelector(".success-message");
const errorMessage = document.querySelector("form span");
const main = document.querySelector("main")



form.addEventListener("submit",function(e){
    
    if(!email.value.includes("@") || !email.value.includes(".") || email.value.length<=2 || email.value.length>=20){
        errorMessage.classList.add("flex");
        e.preventDefault();
    }
    else{
        
        main.style.display="none";
        success.style.display="block";
        
    }
    
})

success.addEventListener("click",function(e){
    main.style.display="flex";
        success.style.display="none";
        form.reset();
        
        
})