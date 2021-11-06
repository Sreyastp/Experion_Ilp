//Take input for FN and LN , Display it as LN FN

let fullName = "Nihal Farhan";
let firstName = "";
let lastName = "";
let index = 0;
let countSample1 = 0;
let countSample2 = 0;

for(let s in fullName){
    countSample1+=1;
}

for(let i=0; i<countSample1; i++){

    if(fullName[i] != ' '){
        firstName+=fullName[i]
        
    }else{
        index = i;
        break;
    }
}


for(let s in firstName){
    countSample2+=1;
}
for(let i = countSample2+1; i<countSample1; i++){

    lastName+=fullName[i];
}


console.log(lastName, firstName);