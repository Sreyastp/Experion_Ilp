function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
console.log(reverseString('hello'));





// let sample = "Hello World";

// let temp = "";

// let countSample = 0;
// for(let s in sample){
//     countSample+=1;
// }
// console.log(countSample);


// for(let i = 0; i <countSample; i++){
//     temp+=sample[countSample-i-1];
// }

// console.log(temp);


