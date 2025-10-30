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
    let origin2=document.getElementById("count").innerHTML;
    let arr=[];
    for(let a=1;a<5;a++){
        arr.push(parseInt(origin2)*(a+1));
    }
    document.getElementById(table);
});

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

document.getElementsByClassName("card")[1].style.backgroundColor="#000";