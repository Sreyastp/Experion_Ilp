
function splitString(inputStr,position){
    let array = ['']
    let arrayIndex = 0

    for(let i=0; i<inputStr.length; i++){
        if(i == position){
            arrayIndex++; 
            array[arrayIndex] = ' ' 
            let x = inputStr[i]
            arrayIndex++; 
            array[arrayIndex] = x

        }
        else{
            array[arrayIndex] += inputStr[i]
        }
    }
    return array
}

let num = '+919497585693'


let numProper = splitString(num,3)
console.log(numProper);
console.log(numProper.join(''));

//[ '+91', ' ', '9497585693' ]
//+91 9497585693

