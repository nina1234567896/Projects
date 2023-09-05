let arrow = document.querySelector(".arrow");
let hidden = document.querySelector(".hidden");
let body = document.querySelector("body");
let visible = true;




arrow.addEventListener("mouseover",function(e){
 
   
        arrow.style.transition= "background-color 2s ease-in";
        hidden.style.display = 'flex';
        visible=true;
}

)

arrow.addEventListener("click",function(e){
   
    if(visible==true){   
        arrow.style.transition= "background-color 2s ease-in";
        hidden.style.display = 'flex';
        visible=false;
       
        } else if(visible==false){
         hidden.style.display = 'none';
         visible=true;
         
            
}
 
})
document.addEventListener("click",function(ev){
   
    if(!ev.target.matches(".arrow"))
   
    hidden.style.display = 'none';
    visible=true;}
);




