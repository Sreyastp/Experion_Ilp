// var ---- public keyword (global scope variable)
//let ----private keyword(block scope variable)

var x= 1;
let y= 1;

if(true){
    var x = 2;
    let y = 2;
    console.log('Inside : ' +x); //2
    console.log('Inside : ' + y); //2
}

console.log('Outside : ' +x); //2
console.log('Outside : ' + y); //1