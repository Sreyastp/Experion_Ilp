let counter = 0; 
const intervallid = setInterval(()=>{
console.log('hello world ');
counter += 1 ;

if (counter === 5 ){
    console.log('done');
    clearInterval(intervallid);
}

},1000);

