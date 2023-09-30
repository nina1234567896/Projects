/* left:87px;/ toggle distacne*/
const checkbox =document.querySelector("input")
const toggleButton = document.querySelector("label");
const monthly = document.querySelectorAll(".card .monthly");
const yearly= document.querySelectorAll(".card .yearly");


checkbox.addEventListener("change",toggle)

toggleButton.addEventListener("click",toggle)

function toggle() {
    toggleButton.classList.toggle("toggleYearly");
    if(toggleButton.classList.contains("toggleYearly")){
        for(i=0;i<monthly.length;i++){
        monthly[i].style.display ="none";
        yearly[i].style.display="block";
    }}else {
        for(i=0;i<monthly.length;i++){
            monthly[i].style.display ="block";
            yearly[i].style.display="none";
    }}
}