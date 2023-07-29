
/*variables*/
const before =document.querySelector(".before-click");
const one = document.getElementsByClassName("button")[0];
const two = document.getElementsByClassName("button")[1];
const three = document.getElementsByClassName("button")[2];
const four = document.getElementsByClassName("button")[3];
const five = document.getElementsByClassName("button")[4];
const after = document.querySelector(".after-click");
const select = document.getElementsByClassName("select")[0]
const submit= document.querySelector("button");
let rating;
console.log(one.innerHTML);
/*event listeners*/
one.addEventListener("click",function(){
    rating= 1;
    select.innerHTML = "You selected " + rating+ " out of 5.";
    
})
two.addEventListener("click",function(){
    rating= 2;
    select.innerHTML = "You selected " + rating +" out of 5.";
})
three.addEventListener("click",function(){
    rating= 3;
    select.innerHTML = "You selected " + rating + " out of 5.";
})
four.addEventListener("click",function(){
    rating= 4;
    select.innerHTML = "You selected " + rating + " out of 5.";
})
five.addEventListener("click",function(){
    rating= 5;
    select.innerHTML = "You selected " + rating + " out of 5.";
})
submit.addEventListener("click",function(){
    
      after.style.display= "block";
      before.style.display="none";
    });


/*let grandparent = document.getElementsByClassName("grandparent")[0];
grandparent.style.width="100px";
*/

/*grandparent.style.color="pink";
grandparent.style.backgroundColor="black";
grandparent.style.textAlign="center";
grandparent.style.paddingTop="15px";
document.body.style.display="flex";
document.body.style.flexDirection="column";
document.body.style.justifyContent="center";
document.body.style.alignItems="center";
console.log(1234);


let parent =document.getElementsByClassName("parent")[0];

parent.style.width="80px";
parent.style.height="80px";

parent.style.backgroundColor="purple";
let child = document.getElementsByClassName("child")[0];
child.style.width="60px";

child.style.height="60px";
child.style.backgroundColor="yellow";
grandparent.addEventListener("click",function(){
    console.log("grandparent GOT CLICKED!");
});
parent.addEventListener("click",function(){
    console.log("parent GOT CLICKED!");
},true);
child.addEventListener("click",function(){
    console.log("CHILD GOT CLICKED!");
*/