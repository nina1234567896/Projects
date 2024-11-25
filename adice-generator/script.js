
let id =document.querySelector("h1");
let par=document.querySelector(".card p ");
let dice =document.querySelector(".dice");


async function getData(){

let r = await fetch("https://api.adviceslip.com/advice")
let y= await r.json()
id.innerText = `ADVICE #${y.slip["id"]}`;
par.innerText = y.slip["advice"]
    
   
}

getData()

dice.addEventListener("click",function(){
    

    try {getData()}
    catch(e){
        return new Error("Timed out")
    }
})
