let buttons =[...document.querySelectorAll("#report button")];
let time= [...document.querySelectorAll(".card-inner h1")]
let currentHrs= document.querySelectorAll(".card-inner h2");
let pastHrs= document.querySelectorAll(".card-inner p");
let val;







async function data(z){
    let r = await fetch("data.json");
    let ar =await r.json();
    let word ;
    if(z=="daily")word="7 Days";
    if(z=="weekly") word =" Week";
    if(z=="monthly") word = "Month"
    for(let i=0;i<ar.length;i++){
         let j= time.findIndex((ele)=>ele.innerText.trim().toLowerCase()==ar[i]["title"].trim().toLowerCase())
           console.log(j)
           currentHrs[j].innerText =ar[i]["timeframes"][z]["current"]=="1"? `${ar[i]["timeframes"][z]["current"]}hr`:`${ar[i]["timeframes"][z]["current"]}hrs`
           pastHrs[j].innerText = ar[i]["timeframes"][z]["previous"]=="1"?`Last ${word} - ${ar[i]["timeframes"][z]["previous"]}hr`:`Last ${word} - ${ar[i]["timeframes"][z]["previous"]}hrs`
    }
    
   buttons.forEach((el,i)=>i!==val?el.style.color="hsla(235, 45%, 61%,0.8)":el.style.color ="rgba(255,255,255,0.8)")
    }



for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(e){
        let r = buttons[i].innerText.toLowerCase() ;
        try{
            buttons[1].classList.remove("helper")
        data(r)
       buttons[i].style.color ="hsla(235, 45%, 61%,0.8)";
       val=i;
        
    }
    catch(e) {
        console.log(e);
        alert("Something went wrong")
    }

    })
}