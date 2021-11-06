//root of quadratic equation
let a = prompt('Enter the first number ');
let b = prompt('Enter the second number ');
let c = prompt('Enter the third number ');

let root1; 
let root2;

d = (b*b)-4*a*c;

if(d>0){
    root1 = (-b+Math.sqrt(d))/2*a;
    root2 = (-b+Math.sqrt(d))/2*a;
    console.log(`The roots of the quadratic equations are ${root1} and  ${root2}`)};
else if(d==0) {
    root2 = root1 = -b/(2*a);
    console.log(root2);
};

console.log(arguments);