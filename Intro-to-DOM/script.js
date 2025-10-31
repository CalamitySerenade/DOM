document.getElementById("taskname1").innerText="Complete prohect documentation";
document.getElementById("taskname2").innerText="idk what to put here";

//I declared a variable and added something to print to thr console
let task=document.getElementById("taskname2").innerHTML;
console.log(task+" "+"is selected");

document.getElementById("compl1").addEventListener("click", function(){
    document.getElementById("taskname2").style.textDecoration="line-through";
    document.getElementById("taskname1").style.color="red";
});

document.getElementById("addTask").addEventListener("click",function(){
    event.preventDefault();
    document.getElementById("taskname3").textContent=document.getElementById("new-task").value; 
});

