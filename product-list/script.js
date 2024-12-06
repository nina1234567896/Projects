let images =[...document.querySelectorAll(".item img")];
let name=[...document.querySelectorAll(".item h4")];
let catergory=[...document.querySelectorAll(".item h5")];
let price=[...document.querySelectorAll(".item h6")];
let decrement =document.querySelectorAll(".increment");
let increment =document.querySelectorAll(".decrement");
let addedItems =document.querySelector(".cart .empty");
let addToCartButton = [...document.querySelectorAll(".item .addToCart")];
let inputField = [... document.querySelectorAll(".item .addToCart span")]
let YourCat = document.querySelector(".cart h1");
let innerCart =document.querySelector(".cart .cart-inner");
OrderTotalAndButton =document.querySelector(".cart .order-total");
let orderTotal = document.querySelector(".cart .order-total span")
let message =document.querySelector(".message .message-inner");
let messageOrderTotal = document.querySelector(".message p span");
let header = document.querySelector("header")
let confirm = document.querySelector(".cart .order-total button");
let ar =[];
let windowWidth= window.innerWidth;
let startNew = document.querySelector(".message button")


async function addData(){
    let r = await fetch("data.json");
    let obj = await r.json();

    for(let i=0;i<obj.length;i++){
       name[i].innerText = obj[i]["name"];
       catergory[i].innerText = obj[i]["category"];
       price[i].innerText = `$${obj[i]["price"].toFixed(2)}`;
       images[i].setAttribute("alt",obj[i]["category"]);
       

       if(windowWidth>375){
        images[i].setAttribute("src",obj[i]["image"]["desktop"]);
       }
       if(windowWidth<=375){
        images[i].setAttribute("src",obj[i]["image"]["mobile"]);
       }
       
    }

}


try{
addData();

} catch(e) {
   console.log(e);
}


for(let i = 0 ; i<addToCartButton.length; i++){
 addToCartButton[i].addEventListener("click",function handleClick(e){
  increment[i].style.display="inline";
  increment[i].style.backgroundColor="transparent";
  decrement[i].style.backgroundColor="transparent";
  decrement[i].style.border="1px solid white";
  increment[i].style.border="1px solid white";
  increment[i].style.fill ="white"
  decrement[i].style.display ="inline";
  decrement[i].style.fill ="white"
   addedItems.remove()
   OrderTotalAndButton.style.display = "block";
   addToCartButton[i].style.backgroundColor = "hsl(14, 86%, 42%)";
   addToCartButton[i].style.color = "hsl(14, 86%, 42%)";
   addToCartButton[i].style.border = "hsl(14, 86%, 42%)";
   inputField[i].style.color ="white";
   inputField[i].innerText=1;
   
   createEl(name[i].innerText, price[i].innerText);
   updateCart()

 addToCartButton[i].removeEventListener("click", handleClick);


 increment[i].addEventListener("mouseover",function(){
   increment[i].style.fill = "hsl(14, 86%, 42%)";
   increment[i].style.backgroundColor="white";
   increment[i].style.border = "1px solid white"
  })


  increment[i].addEventListener("mouseout",function(){
   increment[i].style.fill = "white";
   increment[i].style.backgroundColor="transparent";
   increment[i].style.border = "1px solid white"
  })

  decrement[i].addEventListener("mouseover",function(){
   decrement[i].style.fill = "hsl(14, 86%, 42%)";
   decrement[i].style.backgroundColor="white";
   decrement[i].style.border = "1px solid white"
  })

  decrement[i].addEventListener("mouseout",function(){
   decrement[i].style.fill = "white";
   decrement[i].style.backgroundColor="transparent";
   decrement[i].style.border = "1px solid white"
  })
})

}



for(let i=0;i<addToCartButton.length;i++){
  addToCartButton[i].addEventListener("mouseover",function buttonColour(){
    addToCartButton[i].style.border ="1px solid hsl(14, 86%, 42%)";
    addToCartButton[i].style.color ="hsl(14, 86%, 42%)"
    })

}
for(let i=0;i<addToCartButton.length;i++){
  addToCartButton[i].addEventListener("mouseout",function buttonColourReset(){
    addToCartButton[i].style.border ="1px solid hsl(14, 65%, 9%)";
     addToCartButton[i].style.color ="hsl(14, 65%, 9%)"
  })
}


for(let i = 0 ; i<increment.length; i++){
  
    
   increment[i].addEventListener("click", function(e){  
     
      if(inputField[i].innerText=="Add to Cart"){console.log("hello");
     
    
             addToCartButton[i].addEventListener("click",function handleClick(e){
               increment[i].style.display="inline";
               increment[i].style.backgroundColor="transparent";
               decrement[i].style.backgroundColor="transparent";
               decrement[i].style.border="1px solid white";
               increment[i].style.border="1px solid white";
               increment[i].style.fill ="white"
               decrement[i].style.display ="inline";
               decrement[i].style.fill ="white"
                addedItems.remove()
                OrderTotalAndButton.style.display = "block";
                addToCartButton[i].style.backgroundColor = "hsl(14, 86%, 42%)";
                addToCartButton[i].style.color = "hsl(14, 86%, 42%)";
                addToCartButton[i].style.border = "1px solid hsl(14, 86%, 42%)";
                inputField[i].style.color ="white";
                inputField[i].innerText=1;
                
                createEl(name[i].innerText, price[i].innerText);
                updateCart()
             
              addToCartButton[i].removeEventListener("click", handleClick);
             
             
              increment[i].addEventListener("mouseover",function(){
                increment[i].style.fill = "hsl(14, 86%, 42%)";
                increment[i].style.backgroundColor="white";
                increment[i].style.border = "1px solid white"
               })
             
             
               increment[i].addEventListener("mouseout",function(){
                increment[i].style.fill = "white";
                increment[i].style.backgroundColor="transparent";
                increment[i].style.border = "1px solid white"
               })
             
               decrement[i].addEventListener("mouseover",function(){
                decrement[i].style.fill = "hsl(14, 86%, 42%)";
                decrement[i].style.backgroundColor="white";
                decrement[i].style.border = "1px solid white"
               })
             
               decrement[i].addEventListener("mouseout",function(){
                decrement[i].style.fill = "white";
                decrement[i].style.backgroundColor="transparent";
                decrement[i].style.border = "1px solid white"
               })
             })

           
           
      
          
      }
       inputField[i].innerText=Number( inputField[i].innerText)+1;
      
      
        for(let j=0;j<ar.length;j++){
             if(ar[j]["heading"]==name[i].innerText){  console.log(ar[j]);
               
                
                 ar[j]["counter"].innerText = `${inputField[i].innerText}x`;

                 let a = ar[j]["counter"].innerText.split("x")
                 let b = ar[j]["singlePrice"].innerText.split("$")
                  ar[j]["acc"].innerText =`$${(Number(a[0] ) * Number(b[1])).toFixed(2)}`
  }
  
  updateCart()
  }
 
 })

}
for(let i=0;i<decrement.length;i++){

 decrement[i].addEventListener("click", function(e){
   inputField[i].innerText= inputField[i].innerText>1? Number(inputField[i].innerText)-1 : "Add to Cart";
 
   if(inputField[i].innerText=="Add to Cart"){
    
      let index = ar.findIndex((el)=>el["heading"]==name[i].innerText);
      let div = ar[index]["div"];
      
          div.remove();
          ar.splice(index,1);
         
          updateCart();
          
          inputField[i].innerText = "Add to Cart";
        addToCartButton[i].style.backgroundColor = "hsl(20, 50%, 98%)";
          addToCartButton[i].style.color = "hsl(14, 65%, 9%)";
          addToCartButton[i].style.border = "1px solid hsl(12, 20%, 44%)";
          inputField[i].style.color ="hsl(14, 65%, 9%)";
          increment[i].style.fill="none";
          decrement[i].style.fill="none";
         

      
       

    }
    

   for(let j=0;j<ar.length;j++){
       if(ar[j]["heading"]==name[i].innerText){
          ar[j]["counter"].innerText = `${inputField[i].innerText}x`;

          let a = ar[j]["counter"].innerText.split("x")
          let b = ar[j]["singlePrice"].innerText.split("$")
           ar[j]["acc"].innerText =`$${(Number(a[0] ) * Number(b[1])).toFixed(2)}`
       
          
} 
updateCart()   
}
})
}


function updateCart(){
   let sumOfMultiply=0
   let sumOfTotPrice =0;
   for(let i=0;i<ar.length;i++){
      let a = ar[i]["counter"].innerText.split("x");
      let b = ar[i]["acc"].innerText.split("$");
      sumOfMultiply+= Number(a[0])
      sumOfTotPrice+= Number(b[1])
      console.log(sumOfTotPrice)
   

          
    }
   YourCat.innerText= `Your Cart (${sumOfMultiply })`
   orderTotal.innerText= `$${sumOfTotPrice.toFixed(2)}`;
   messageOrderTotal.innerText = orderTotal.innerText
 

   }

  


function createEl(title, price ){
        
         let div = document.createElement("div");
         let heading = document.createElement("h4")
         let spanMultiply = document.createElement("span");
         let at = document.createElement("span");
         let singlePrice = document.createElement("span");
         let totPrice = document.createElement("span");
         let cross = document.createElementNS("http://www.w3.org/2000/svg", "svg");
         cross.setAttribute("xmlns", "http://www.w3.org/2000/svg");
         cross.setAttribute("width", "24");
         cross.setAttribute("height", "24");
         cross.setAttribute("viewBox", "0 0 24 24");
         cross.innerHTML = `
           <path d="M6 18L18 6M6 6l12 12" stroke-width="3"/>`;
       
        innerCart.appendChild(div);
        div.appendChild(heading);
        div.appendChild(spanMultiply);
        div.appendChild(at);
        div.appendChild(singlePrice);
        div.appendChild(totPrice);
        div.appendChild(cross)

        div.classList.add("added");
        spanMultiply.classList.add("multiply");
        at.classList.add("single-price")
        singlePrice.classList.add("single-price");
        totPrice.classList.add("total-price");
        cross.classList.add("theSvg")
        heading.innerText=title;
        singlePrice.innerText = price;
        spanMultiply.innerText =  `1x`;
        at.innerText="@"
        totPrice.innerText = price;
 
         
     
    ar.push({"heading":title, "counter":spanMultiply, "acc":totPrice , "singlePrice": singlePrice, "div":div})
     
    cross.addEventListener("click",function(){
      div.remove();
      let i =[ar.findIndex((el)=>el["heading"]==title)];
       
      ar.splice(ar.findIndex((el)=>el["heading"]==title),1)   
       updateCart();
       let j= name.findIndex((el)=>el.innerText==title)
       inputField[j].innerText ="Add to cart";
       addToCartButton[j].style.backgroundColor = "hsl(20, 50%, 98%)";
       addToCartButton[j].style.color = "hsl(14, 65%, 9%)";
       addToCartButton[j].style.border = "1px solid hsl(12, 20%, 44%)";
       inputField[j].style.color ="hsl(14, 65%, 9%)";
       increment[j].style.display="none";
       decrement[j].style.display ="none";

       addToCartButton[j].addEventListener("click", function reclick(){
         increment[j].style.display="inline";
         decrement[j].style.display ="inline";  
         addToCartButton[j].style.backgroundColor = "hsl(14, 86%, 42%)";
         addToCartButton[j].style.color = "hsl(14, 86%, 42%)";
         addToCartButton[j].style.border = "hsl(14, 86%, 42%)";
         inputField[j].style.color ="white";
         inputField[j].innerText =1;
         console.log( title)
         createEl(title, price);
        
         updateCart()
         addToCartButton[j].removeEventListener("click", reclick);

       })

       

      
      })
       
      

     
   }

 
   
         

         

         
         function createConfirmed(title, counter, total , single){
            let messageDiv = document.createElement("div");
            let messageHeading = document.createElement("h4");
            let thumbnail = document.createElement("img")
            let messageDivspanMultiply = document.createElement("span");
            let at = document.createElement("span");
            let messageDivSinglePrice = document.createElement("span")
            let messageDivTotPrice = document.createElement("span");
      
            message.appendChild(messageDiv);
            messageDiv.appendChild(messageHeading);
            messageDiv.appendChild(thumbnail);
            messageDiv.appendChild(messageDivspanMultiply);
            messageDiv.appendChild(at)
            messageDiv.appendChild(messageDivSinglePrice);
            messageDiv.appendChild(messageDivTotPrice);
      

        messageDivspanMultiply.classList.add("multiply");
        at.classList.add("single-price")
        messageDivSinglePrice.classList.add("single-price");
        messageDivTotPrice.classList.add("total-price");
        thumbnail.classList.add("thumbnail") 

           at.innerText="@"
        messageDivspanMultiply.innerText = counter;
        messageHeading.innerText = title;
        messageDivSinglePrice.innerText = single;
        messageDivTotPrice.innerText = total;
        
        async function getThumbnail(){
         let a = await fetch("data.json");
         let obj = await a.json();
         for(let i=0;i<obj.length;i++){
           if(title == obj[i]["name"]){
            thumbnail.setAttribute("src",obj[i]["image"]["thumbnail"])
            thumbnail.setAttribute("alt",obj[i]["image"]["category"])
           }
         }
}

   try{
        getThumbnail()
       }catch(e){
            console.log(e)
            }
           
         }  
    
       

         confirm.addEventListener("click", function(){
         
            for(let i=0; i<ar.length;i++){
              createConfirmed(ar[i]["heading"] , ar[i]["counter"].innerText,ar[i]["acc"].innerText,ar[i]["singlePrice"].innerText);
           
         
         }
             header.style.display = "flex";
         
             
      
         })

         startNew.addEventListener("click",function(){
                 header.style.display = "none";
               try{
             location.reload()
                  }
                catch(e){
                   console.log(e)
                   }
            })


            for(let i=0;i<increment.length;i++){

            }
