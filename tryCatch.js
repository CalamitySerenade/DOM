//Ask user to give you two numbers and divide them

let num1=prompt('Enter first number:');
let num2=prompt('Enter second number:');

try{
    num1=parseFloat(num1);
    num2=parseFloat(num2);
    console.log("The answer is: "+answer)
}
catch(error){
    console.log("There was an error: "+error)
}