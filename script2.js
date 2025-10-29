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