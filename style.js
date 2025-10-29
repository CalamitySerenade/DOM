document.getElementById("task1").innerText="Complete prohect documentation";

//I declared a variable and added something to print to thr console
let task=document.getElementById("task2").innerHTML;
console.log(task+" "+"is selected");

document.getElementById("compl1").addEventListener("click", function(){
    document.getElementById("task2").style.textDecoration="line-through";
    document.getElementById("task1").style.textDecoration="line-through";
});