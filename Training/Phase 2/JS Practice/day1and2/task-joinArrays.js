let array1 = ['a','b','c']
let array2 = ['d','e','f']

let array3 = array1 + array2
console.log(array3) //a,b,cd,e,f

var i 

function merge(arrayOne,arrayTwo){
    result = []
    result_index = -1
    for(i=0;i< arrayOne.length ; i++){
        result_index++;
        result[result_index] = arrayOne[i]
    }
    for(i=0;i< arrayTwo.length ; i++){
        result_index++;
        result[result_index] = arrayTwo[i]
    }
    return result
}

let mergedArray = merge(array1,array2)
console.log(mergedArray)

