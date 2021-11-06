//Split a given number to a proper phone number

let num = '+919739212829';
let finalNum1 = '';
let finalNUm2 ='';

let countSample = 0;
for(let s in num){
    countSample+=1;
}

for(let i=0; i<countSample; i++){
    if(i<3){
        finalNum1 +=num[i]
    }else{
        finalNUm2+=num[i]
    }
}

console.log(finalNum1, finalNUm2);