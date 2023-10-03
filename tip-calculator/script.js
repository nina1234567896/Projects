
let body = document.querySelector("body")
let buttons = document.querySelectorAll(".percent");
let bill= document.querySelector(".bill");
let people= document.querySelector(".people");
let custom= document.querySelector("#custom-button");
const tipAmount= document.querySelector(".tip span");
const total= document.querySelector(".amount span");
const input =document.querySelectorAll("input");
const reset = document.querySelector(".reset");
const error =document.querySelector(".error");

let billAmount;
let totalPeople;
let tipInput;


body.addEventListener("input",function(){
     reset.disabled =false;
})

for( let j=0; j<buttons.length;j++){
    
        buttons[j].addEventListener("click",function(){

             tipInput =parseInt(this.innerText);
            TIPS();
        })

}
bill.addEventListener("input",function(e){
    if(bill.value!==0 && bill.value!==undefined){
    billAmount= parseFloat(this.value);
   
     TIPS();}
})
  
    


people.addEventListener("input",function(e){
    if( this.value==0 ){
        error.style.display="block";
        this.style.border ="2px solid red";
        totalPeople=undefined;
       
      
      
    }
    else if(this.value!==0 || this.value!==undefined){
       
        totalPeople= parseInt(this.value);
        error.style.display="none";
        this.style.border ="none";

        
        TIPS()}
       
    }
)
   
custom.addEventListener("input",function(){
    tipInput= parseFloat(custom.value);
    
    TIPS();
})

reset.addEventListener("click",function(e){
    for(let i=0;i<input.length;i++){
     input[i].value="";
    }
     tipAmount.innerText="0.00";
     total.innerText="0.00";
     error.style.display ="hidden";

     billAmount = undefined;
       totalPeople=undefined;
      tipInput=undefined;
      this.disabled=true;
    

 })


    function TIPS(){
        /**() ((tip amount +100) /100) into amount ) divideedby no of people is totalperperson*/
        if(billAmount!==undefined && totalPeople!==undefined && tipInput!==undefined)  { 
             
            total.innerText =(((( 100 + tipInput) /100 ) * billAmount ) / totalPeople).toFixed(2);
            tipAmount.innerText = (((tipInput /100) * billAmount) / totalPeople).toFixed(2);
     } else {
        total.innerText="0.00";
        tipAmount.innerText = "0.00";
     }
    

    if(total.innerText=="NaN" && tipAmount.innerText=="NaN"){
        total.innerText="0.00";
        tipAmount.innerText="0.00";
    }
    }





