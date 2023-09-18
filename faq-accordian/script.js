

let content =document.querySelectorAll(".content");
let questions= document.querySelectorAll(".question p");
let answers= document.querySelectorAll(".hidden");
let vgs =document.querySelectorAll(".question svg");




questions.forEach((el,i)=>{
 

el.addEventListener("click",function(e){
     el.classList.toggle("fonts");
     answers[i].classList.toggle("col");
     vgs[i].classList.toggle("tog-arrow");
  
     for(j=0;j<questions.length;j++){
          if(questions[j]!==el){
             
               questions[j].classList.remove("fonts");
               answers[j].classList.remove("col");
               vgs[j].classList.remove("tog-arrow");
            
          }
     }
})


})

vgs.forEach((el,i)=>{
 

     el.addEventListener("click",function(e){
          questions[i].classList.toggle("fonts");
          answers[i].classList.toggle("col");
          el.classList.toggle("tog-arrow");
       
          for(j=0;j<vgs.length;j++){
               if(vgs[j]!==el){
                  
                    questions[j].classList.remove("fonts");
                    answers[j].classList.remove("col");
                    vgs[j].classList.remove("tog-arrow");
                 
               }
          }
     })
     
     
     })