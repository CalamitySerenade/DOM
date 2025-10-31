document.getElementById("changeP").innerHTML="1"
document.getElementById("addButton").innerHTML="add value"

//I am selecting the button and adding an event listener for the mouse click that will
//Run a function
document.getElementById("addButton").addEventListener("click",function(){
    let origin=document.getElementById("changeP").innerHTML;
    console.log(origin);
    origin=parseInt(origin)+1;
    document.getElementById("changeP").innerHTML=origin;
});

document.getElementById("MultiplicationButton").addEventListener("click",function(){
    let origin = document.getElementById("changeP").innerHTML;
    let arr=[];
    for(let a =0;a<5;a++){
        arr.push(parseInt(origin)*(a+1));
    }
    document.getElementById("MultiplicationButton").innerHTML=arr.join(" ");
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

//Multiplication card
document.getElementById("MultiplicationButton").addEventListener("click",function(){
    let arr=[];
    for(let a=1;a<=10;a++){
        let mult=a*changeP.innerHTML;
        console.log(mult);
        document.getElementById("td"+a).innerHTML=mult;
    }
});

//getElementsByTagName will return array of elements
let array=[];
let origin = document.getElementById("changeP").innerHTML;
for(let x=1;x<=10;x++){
    let num=origin*x;
    array.push(num);
}
console.log(array);
//To retrieve the array, start at index 0 and go up to index 9
//Primary challenge is how to put it in the tagName
//map method in action:
let number=array.map(ab);
console.log(number);
function ab(num){
    return num*5;
}

for(let index=0;index<array.length;index++){
    document.getElementsByTagName("td")[index+2].innerHTML=array[index];
}
//Conclusion: I would need one for the array and one for td tags
//Therefore, this approach will not be the most suitable
//Another thing we can do is used Array.map to figure out a way

/*Array.map method:
const newArr = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

or is also:
const numbers = [4, 9, 16, 25];
const newArr = numbers.map(Math.sqrt)
*/