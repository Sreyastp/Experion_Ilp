//swap two variables 
let var1 = prompt('Enter the first variable ');
let var2 = prompt('Enter the second variable ');


let temp;

temp = var1;
var1 = var2;
var2 = temp;

console.log(`the value of varible after swapping is ${var1}`);
console.log(`the value of varible after swapping is ${var2}`);