const slider = document.querySelector("#range");
const h1 =document.querySelector("h1");
const pageview = document.querySelector(".container-range h1");
const prices = document.querySelector(".container-range h1 span");
let pageviews= "pageviews";
let dollar = "$";
const toggle = document.querySelector(".toggle-container .toggle-button");
const checkbox = document.querySelector(".toggle-container input");
let discountp = 0.75;



slider.addEventListener("input",sliderWithToggle);

toggle.addEventListener("click",function(e){
    
    
    toggle.classList.toggle("toggleButtonON");
    checkbox.classList.toggle("toggleButtonONColourChange");
     sliderWithToggle();

 }) 
 


function sliderWithToggle(){

   
    let array= [{value:10000, price:8.00, pageviews:`10k ${pageviews}`},
    {value:257500, price:12.00,pageviews:`50k ${pageviews}`},
    {value:505000, price:16.00 ,pageviews:`100k ${pageviews}`},
    {value:752500, price:24.00,pageviews:`500k ${pageviews}`},
    {value:1000000, price:36.00,pageviews:`1 Million ${pageviews}`}]

    

if(!toggle.classList.contains("toggleButtonON")){
        if(slider.value==array[0].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0,var(--LightGrayishBlueEMPTYSLIDERBAR)0% 100%)`;
                pageview.innerText = array[0].pageviews;
           prices.innerText=dollar + (array[0].price).toFixed(2);
    

         }else if(slider.value==array[1].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 25%,var(--LightGrayishBlueEMPTYSLIDERBAR)25% 100%)`;

                 pageview.innerText = array[1].pageviews;
                 prices.innerText=dollar + (array[1].price).toFixed(2);

         }else if(slider.value==array[2].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 50%,var(--LightGrayishBlueEMPTYSLIDERBAR)50% 100%)`;
                 pageview.innerText = array[2].pageviews;
                 prices.innerText=dollar + (array[2].price).toFixed(2);

         }else if(slider.value==array[3].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 75%,var(--LightGrayishBlueEMPTYSLIDERBAR)75% 100%)`;

                 pageview.innerText = array[3].pageviews;
                 prices.innerText=dollar + (array[3].price).toFixed(2);

         }else if(slider.value==array[4].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 100%,var(--LightGrayishBlueEMPTYSLIDERBAR)100% 100%)`;
                 pageview.innerText = array[4].pageviews;
                prices.innerText=dollar + (array[4].price).toFixed(2);

         }

    } else {
        if(slider.value==array[0].value){
            slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0,var(--LightGrayishBlueEMPTYSLIDERBAR)0% 100%)`;
            pageview.innerText = array[0].pageviews;
            prices.innerText= dollar +( discountp * array[0].price).toFixed(2) ;
     
 
          }else if(slider.value==array[1].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 25%,var(--LightGrayishBlueEMPTYSLIDERBAR)25% 100%)`;
                  pageview.innerText = array[1].pageviews;
                  prices.innerText= dollar + (discountp * array[1].price).toFixed(2);
 
          }else if(slider.value==array[2].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 50%,var(--LightGrayishBlueEMPTYSLIDERBAR)50% 100%)`;
                  pageview.innerText = array[2].pageviews;
                  prices.innerText=dollar + (discountp * array[2].price).toFixed(2) ;
 
          }else if(slider.value==array[3].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 75%,var(--LightGrayishBlueEMPTYSLIDERBAR)75% 100%)`;

                  pageview.innerText = array[3].pageviews;
                  prices.innerText=dollar + (discountp * array[3].price).toFixed(2);
 
          }else if(slider.value==array[4].value){
                slider.style.background = `linear-gradient(to right, var(--SoftCyanFULLSLIDERBAR) 0 100%,var(--LightGrayishBlueEMPTYSLIDERBAR)100% 100%)`;
                  pageview.innerText = array[4].pageviews;
                 prices.innerText= dollar + (discountp * array[4].price).toFixed(2);
          }
    }

}


    


