//variable declaration
let x =5;
let y =3;

//addition
console.log('x+y = ',x+y);

//subtraction
console.log('x-y = ',x-y);

//multiplication
console.log('x*y = ',x*y);

//division
console.log('x/y = ',x/y);

//remainder
console.log('x%y = ',x%y);

console.log(x)
//increment
console.log('++x = ',++x); //x is 6
console.log('x++ = ',x++); // print 6 and then increased to 7
console.log('x = ',x); // 7 
//decrement
console.log('--x = ',--x);
console.log('x-- = ',x--);
console.log('x = ',x);

//exponentation
console.log('x ** y = ',x ** y);

//equal operator
console.log(2==2); //true
console.log(2=='2'); //true

//not equal
console.log(3!=2); //true
console.log('hello' != 'Hello'); //false

//strict equal operator
console.log(2 === 2); //true
console.log(2 === '2') //false

//strict not equal operator
console.log(2 !== '2'); //true
console.log(2 !==2); //false

//logical AND
console.log(true && true); //true (multiplication)
console.log(true && false); //false

//logical OR
console.log(true||false); //true (addtion)

//logical NOT
console.log(!true); //false - swaps the value 



//Implicit conversion to string

//numeric string used with + gives string type (only with + will behave differently in js, for all other operators perform arithemetic operations)

let result 

result = '3' + 2;
console.log(result);   //32

result = '3' + true;
console.log(result); //3true

result = '3' + undefined
console.log(result); //3undefined

result = '3' + null
console.log(result); //3null


//Implicit conversion to Number

//numeric string used with -,/,* results number

result = '4' - '2'
console.log(result); //2

result = '4' - 2;
console.log(result); //2

result = '4' * 2 
console.log(result); //8

result = '4' /2 
console.log(result); //2



