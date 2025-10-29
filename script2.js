document.getElementById("counter").innerHTML="1"
document.getElementById("addButton").innerHTML="add value"

//I am selecting the button and adding an event listener for the mouse click that will
//Run a function
document.getElementById("addButton").addEventListener("click",function(){
    let origin=document.getElementById("counter").innerHTML;
    document.getElementById("addButton").innerHTML=origin;
})