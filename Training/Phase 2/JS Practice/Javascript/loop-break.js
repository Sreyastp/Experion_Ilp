//while & break

let i =0;

while (i<6){
    if(i === 3){
        break;
    }
    i = i+1;
}

console.log(i); //3

//do-while
let result = '';
let j = 0;

do{
    j = j + 1;
    result=result+i;

}while(j<5)

console.log(result);



let str = '';

for (let k = 0; k<9;k++){
    str = str + k;
}

console.log(str);

// var i = 0;
// for(;i<3;i++){
//     console.log(i);
// }

for(let l =0;;l++){
    console.log(l);

    if(l>3) break;
}

var m = 0;
for(;;){
    if(m>3)break;
    console.log(m);
    m++;
}
