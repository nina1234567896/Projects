let days = document.querySelectorAll(".flex .block p");
let bars = document.querySelectorAll(".bar");
let labels = document.querySelectorAll(".block span")
let todaysDay = (new Date().getDay()) - 1;


bars[todaysDay].style.backgroundColor = "hsl(186, 34%, 60%)"



async function getData(){
    let jso = await fetch("data.json");
    let arr = await jso.json();

    for(let i=0;i<arr.length;i++){
        if(days[i].innerText==arr[i]["day"]){
            bars[i].style.height = `${Number(arr[i]["amount"]) * 2}px`;
            labels[i].innerText = `\$${arr[i]["amount"]}`    
        }
    }
}

getData();

function hoverStateColour(){
    for(let i=0;i<bars.length;i++){
      if(i!==todaysDay){
        bars[i].addEventListener("mouseover", function(){
            bars[i].style.backgroundColor = "hsl(10, 84%, 75%)";
            labels[i].style.visibility = "visible"
        })
        bars[i].addEventListener("mouseout", function(){
            bars[i].style.backgroundColor = "hsl(10, 79%, 65%)";
            labels[i].style.visibility = "hidden"
        })
      } else{
        bars[i].addEventListener("mouseover", function(){
            bars[i].style.backgroundColor = "hsla(186, 34%, 60%,0.5)"
            labels[i].style.visibility = "visible";
        })
        bars[i].addEventListener("mouseout", function(){
            bars[i].style.backgroundColor = "hsl(186, 34%, 60%)";
            labels[i].style.visibility = "hidden"
        })
    }
    } 
}

hoverStateColour()

