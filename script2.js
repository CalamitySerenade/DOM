document.getElementById("counter").innerHTML="1"
document.getElementById("addButton").innerHTML="add value"

//I am selecting the button and adding an event listener for the mouse click that will
//Run a function
document.getElementById("addButton").addEventListener("click",function(){
    let origin=document.getElementById("counter").innerHTML;
    console.log(origin);
    origin=parseInt(origin)+1;
    document.getElementById("counter").innerHTML=origin;
});

document.getElementById("multiplier table").addEventListener("click",function(){
    let origin = document.getElementById("counter").innerHTML;
    let arr=[];
    for(let a =0;a<5;a++){
        arr.push(parseInt(origin)*(a+1));
    }
    document.getElementById("multiplier table").innerHTML=arr.join(" ");
});
document.getElementsByClassName("card")[0].style.borderRadius="8px";

//Now, the card has a counter, it is functional, the card made has a functionality
//Functionality being an increase of 1
//Both getElementByTag and getElementByClass return an array
//getElementByTagName works by interacting with tags in HTML
//Ex: (html,head,body,p,h1,h2,etc)
//Call with button: Will interact with buttons (array button)
//Must decide on which one you want to use
//Similar to tagName method, you have getElementByClass
//elementsByClassName follows same rules as getElementByTagName
//by using ClassName, you can target a specific card

document.getElementsByClassName("card")[1].style.backgroundColor="Tan";
document.getElementsByClassName("card")[1].style.borderRadius="8px";
document.getElementById("multiplier table").addEventListener("click",function(){
    let arr=[];
    for(let a=1;a<=10;a++){
        let mult=a*counter.innerHTML;
        console.log(mult);
        document.getElementById(a).innerHTML=mult;
    }
});
