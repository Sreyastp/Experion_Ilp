//Abdullah Khan should be displayed as Khan Abdhullah without inbuilt func

function splitString(inputStr,delimiter){
    let array = ['']
    let arrayIndex = 0

    for(let i=0; i<inputStr.length; i++){
        if(inputStr.charAt(i)== delimiter){
            arrayIndex++;
            array.push('')
        }
        else{
            array[arrayIndex] += inputStr.charAt(i)
        }
    }
    return array
}

let str = "Abdullah Khan"
let strArray = splitString(str," ")
console.log(strArray); //[ 'Abdullah', 'Khan' ]

[strArray[0],strArray[1]] = [strArray[1],strArray[0]] 
console.log(strArray); //[ 'Khan', 'Abdullah' ]

console.log(`${strArray[0]} ${strArray[1]}`)

//Khan Abdullah
