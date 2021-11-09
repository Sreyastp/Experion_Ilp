

const vehicle = {
    name:"apache",
    color:"white",
    cubicCapacity: 200,
    power: 16,
    ridingModes:{
        modeOne:"rain",
        modeTwo:"Sport",
        modeThree:"Urban"
    },
    //methods
    editPower: function (pwr){
        this.power = pwr ;
    }
}

console.log("The name of the vehicle is : " ,vehicle)
console.log(vehicle.name)
console.log(vehicle.ridingModes.modeThree)



//printing power
console.log("This is the Power before editing " ,vehicle.power)

//modifying power using function
vehicle.editPower(21)

//power after modifying
console.log("This is the power after changing ", vehicle.power)

//function in javascript
function hi(){
    console.log('hi')
}
hi();




//function with parameters
function add(numOne,numTwo,numThree){
  let Sum = numOne + numTwo + numThree;
  console.log(Sum);
}
//calling the functions with values 
add(10,20,20)


//global scope vs local scope 
//global var
let glob = 12;

function fun1(){
    let loc= 11; //local variable
    console.log(glob);
    console.log(loc);
    
}

function fun2(){
   // console.log(loc) // this wont work
    console.log(glob)
}

//calling fun
fun1();
fun2();

//precedance of local variable
var outer = 'onnula';

function entha(){
    var outer = 'entha'
    return outer;
}

console.log(entha());
console.log(outer);

// //function with undefined value
// var vaar = 10;
function unreturn(){
   vaar++;
}



//stimulating queue
function nextInLine(arey, newadd){
    arey.push(newadd)
    arey.shift()
    return newadd;
}

testarray = [1,2,3,4,5];

console.log('Before:', JSON.stringify(testarray));     //convert array into string
console.log(nextInLine(testarray,6))
console.log('After:', JSON.stringify(testarray));     //convert array into string



//if statement
function trueOrFalse(isittrue){
    if(isittrue){
        return 'ithu sheri aan';
    }
    return 'ithu thetaan';
}

console.log(trueOrFalse(false));



//if else statements
function ifelselearn(no){
    if(no<5){
        return "less than five"
    }
    else if (no<20){
        return 'less than 20'
    }
    else if (no<30){
        return 'lessthan 30'
    }
    else {
        return 'less than 50'
    }
}

console.log(ifelselearn(20));

//array index
array = ['sreyas','apache','thala']; //create an aray
console.log(array[1]); // acessing the array


//switch statement
function learnswitch(no){
    var answer = ""

    switch(no){
        case 1:
            return answer ="first";
            break;
        case 2:
            return answer ="second";
            break;
        default:
            return answer = 'nothing'
            break;
}
}
//fn call
console.log(learnswitch(32));


//bracket notation
var car= {
    name: 'audi',
    "engine confg" : "twin turbo"
}

var engineCOnfig = car["engine confg"];

//updating objects
car["engine confg"] = '6 cylinnder';

console.log(car["engine confg"]);


//adding properties to objects
car['wheel']='alloy';

//acessing newly added property 
console.log(car.wheel);

//delete properties from objects
delete car.name

console.log(car)


//look up using objects
function lookup(pass){

    var bike = { 
        apache : 17800,
        pulsar : 16500,
        xpulse : 12500
    }
    res = bike[pass];
    return res;
}

console.log(lookup('apache'));




//has own property 
let engine ={
    name : 'single cylinder',
    cc: 180
}

var prop = function (propCheck){

    if (engine.hasOwnProperty(propCheck)){
        return "property found";
    }
    return 'property not found';
}

console.log(prop('cc'));


//nested objects
var truck = {
    suv:{
        comp1:"volvo",
        comp2:"bharathbenz"
    }
}

console.log(truck.suv.comp1);

//nested arrays
var testarr = [
    {
        movies:['shark','gun']
    },
    {
        animals:['dog','cat'],
        birds:['hen','crow']
    }
]

//acessing nested arrays
console.log(testarr[1].animals[1])  //accessing cat




//while loops
whilearray = [];
 var i =0;
 while(i<=10){
     whilearray.push(i);
     whilearray.push('poda');
     i++;
 }

console.log(whilearray);

// for loop
forarray = [];
for(var j=0; j<10; j+=3){
    forarray.push(j)
}
console.log(forarray)


//iterating through array using for loop
arrtst = [1,3,4,5,3,2,2,37,77,8,44,99]
var sum = 0;

for(var i = 0 ; i<arrtst.length; i++){
     sum += arrtst[i];
}
console.log(sum)



//multi array 
multiarray = [[1,2,2],[2,4],[3,4]]
var product =1; 

for(var i=0 ; i<multiarray.length ; i++){
    for(var j =0 ; j<multiarray[i].length ; j++)
     product *= multiarray[i][j];
}
 console.log(product)



 //do while loop 
var doarr = [ ];
var i = 10;

do{
    doarr.push(i)
    i++
}while(i<6)

console.log(i,doarr)


//parse in function 

function converttoint(str){
    return parseInt(str);
}

console.log(converttoint("50"));

//ternaryy operator

function ret(a,b){
    return a===b ? true : false;   //ie if a === b return true else false
}

//nested ternary operator
function ter(num){
    return num>0 ?  "positive" : num < 0 ? "negative" : "Zero" 
 }

 console.log(ter(10));


//scope of let is only inside the block
//var scope is not like that it is like global


//anonymous function 
//arrow function 
const anfnn = () => new Date();   

//arrow function with parameters
const arrfn = (a,b) => a+b ;

console.log(arrfn(12,32));

//default parameters with arrow function 
// const tempo = function(){
//     return function test(a,b=2){          //default parameter (b=2)
//         return a+b;
//     }
// }

// console.log(test(3));
// console.log(test(3,4));

//rest operator is used to create an array from passed parameter
//spread operator is used to spread the elements of the array into individual parts
//these two are not used









//destructuring of objects

const cats = { a:2,b:3,c:4 };


//to assign the values of the  object into a variable 
//either do it like this ie --   var x = cats.a or do it like below 

const { x: a, y:b , z:c} = cats


///example 2
const avg_temp = {
today:33,
tommorow:100    
}

function temptrw(){
    const {tommorow : temptomrw } = avg_temp;
    return temptomrw
}

console.log(temptrw(avg_temp));





//destructuring of nested objects
const forcast = {
    today: {min:12,max:22 },
    tommorw : { min: 33 , max: 101}
}

function temtrw(forct){
    const { tommorw : {max:temptmrww}} = forct ;
    return temptmrww;
    
}
console.log(temtrw(forcast))



//destructuring of arrays
//ie assigning the array elements into diff variables
let [m,n,o,p, , ,g] = [1,2,3,4,5,6,7,8]
console.log('the 7th araay element is copied in to g ie g =', g);

[m,n] = [n,m]  ///changing variables

console.log(m,n) //value of to m into n



// //destructruring objects
// const objj= {
//     min :111,
//     max:222,                     //entho error und 
//     med:223,
//     sd:21
// }

// const ress =function res({max , min}){
//     console.log(max+min)
// }

// resss(objj);         //passing the object to a funnction




// using bactics so nicely 
const reslt = {
    sucess:["ine","teo","terr"],
    failure:["one","tree","add"]
}

function ul(pass){
    const tarray = [];
    for(i=0;i<pass.length;i++){
        tarray.push(`<ul class="form"> ${pass[i]} </ul>`)
    }
        return tarray;
}

console.log(ul(reslt.sucess));


//simple fields
const createPerson = (namme , age , gender) => {
    return {
        name: namme , 
        age: age,
        gended: gender
    }

}

// it can be alternatively writtern as 
const createPerson1 = (namme , age , gender) => {         //easy way
    return {namme , age, gender}

}



console.log(createPerson("sreyas",23,"male"))
console.log(createPerson1("sreyastp",23,"male"))


//USING IMPORT multiple expport from a file
//import * as somename from "./filename"
// import {  xxxx } from "./filename"   //this is for no default import
//for default import ------import xxx from "import name" 
//default export is for only a particular thing from a file