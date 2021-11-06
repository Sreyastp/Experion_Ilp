//Reverse a string

let sample = "Hello World";

let temp = "";

let countSample = 0;
for(let s in sample){
    countSample+=1;
}
console.log(countSample);


for(let i = 0; i <countSample; i++){
    temp+=sample[countSample-i-1];
}

console.log(temp);






