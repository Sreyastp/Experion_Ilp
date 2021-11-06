//To check whether a number is palindrome

let checkString = "Madam";
let tempString = "";

let countSample = 0;
for(let s in checkString){
    countSample+=1;
}


for(let i = 0; i <countSample; i++){
    tempString+=checkString[countSample-i-1];
}

if(checkString.toLowerCase() === tempString.toLowerCase()){
    console.log(checkString, " is a palindrome");
}
else{
    console.log(checkString, "Not a plaindrome");
}