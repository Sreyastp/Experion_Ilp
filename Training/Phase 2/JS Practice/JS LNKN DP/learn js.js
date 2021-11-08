

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


multiarray = [[1,12,23],[2,3,3,4,4],[23,33,44,4]]
var product =1; 

for(var i=0 ; i<multiarray.length ; i++){
    for(var j =0 ; j<multiarray[i].length ; j++)
     product *= multiarray[i][j];
}