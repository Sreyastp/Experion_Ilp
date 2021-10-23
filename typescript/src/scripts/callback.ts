//synchrous
function addNumber(numOne: number,
                    numTwo: number,
                    printCb: (l:string, v:any) => void){
    //console.log(numOne+numTwo);
        printCb("result is", numOne+numTwo);
}


function prettyPrint(label: string, val: any){
    //output: result is :300
    console.log('-----------');
    console.log(`${label} : ${val}`);
    console.log('-----------');
    

}

addNumber(100,200,prettyPrint);


//Asynchronous 
console.log("before");
setTimeout(()=>
        console.log('Welcome Guys'),2000
    //async //url-- REST API
    //response - accept /reject -- promise
    //await

);
console.log("After");