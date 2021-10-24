"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/*console.log("Hello");

//declare varialbles
//function
function add(numberOne:number,numberTwo:number){
    return numberOne + numberTwo
}

if(typeof numberOne !== 'number' || typeof numberTwo !== 'number')
{
    throw new Error('error message');
}

const  numberOne = 5;
const numberTwo = 9;

const result = add(numberOne,numberTwo);

console.log(result)





const result */
//mars
function marsdistance(speedkmph, distancekm) {
    var timeToMarshrs = distancekm / speedkmph;
    var timetomarsdays = timeToMarshrs / 24;
    return timetomarsdays;
}
function moondistance(speedkmph, disttomoonkm) {
    var timeTomoonhrs = disttomoonkm / speedkmph;
    var timetomoonsdays = timeTomoonhrs / 24;
    return timetomoonsdays;
}
//mars
var shuttleName = 'Determination';
var distancekm = 225000000;
var speedmph = 17500;
var speedkmph = speedmph * 1.6;
//moon
var disttomoonkm = 38400;
console.log(marsdistance(speedkmph, distancekm));
console.log(moondistance(speedkmph, disttomoonkm));
var engineIndicatorLight = "red blinking";
var spaceSuitsOn = "true";
var shuttleCabinReady = "true";
var crewStatus = spaceSuitsOn && shuttleCabinReady;
var computerStatusCode = 200;
var shuttleSpeed = 15000;
if (engineIndicatorLight === "green") {
    console.log("engine ON");
}
else if (engineIndicatorLight === "green blinking") {
    console.log("ENgine is preparing");
}
else {
    console.log("engines are off");
}
if (crewStatus) {
    console.log("crew ready");
}
else {
    console.log("crew not ready");
}
var value = 200;
if (value === 200) {
    console.log("Please stand by . computer is rebooting");
}
else if (value === 400) {
    console.log("Sucess! computer online");
}
else {
    console.log("Alert: computer offline");
}
var value1 = 20000;
if (value1 > 17500) {
    console.log("Alert: Escape velocity reached");
}
else if (value1 < 8000) {
    console.log("Alert: cannot maintain orbit");
}
else {
    console.log("Stable speed");
}
/*

    
    if(fuelLevel < 1000 || engineTemperature > 3500 || engineIndicatorLight==="red blinking") {
        console.log("Engine Failure imminent");
    }
    else if(fuelLevel <= 5000 || engineTemperature > 2500){
        console.log("Check fuel level engine runninhg hot");
    }
    else if(FuelLevel > 20000 && engineTemperature <= 2500 ){
        console.log("Alert: cannot maintain orbit");
    }
    else if(fuellevel < 8000){
        console.log("Alert: cannot maintain orbit");
    }
    else if(value1 < 8000){
        console.log("Alert: cannot maintain orbit");
    }
    else if(value1 < 8000){
        console.log("Alert: cannot maintain orbit");
    }
    else{
        console.log("Stable speed")
    }

    */
//const ADMIN = 0;
//const READ_ONLY = 1;
/*

//ENUM
enum Role {ADMIN ,USER ,GUEST ,CORDINATOR,MANAGER}


let employee={
    name: 'Sreyas',
    age: 23,
    hobbies:['Gaming','triping','cool'],
    role:[2,'author']
    
}

console.log(employee)
console.log(employee.name)
console.log(employee.age)

let movies : string[] ;
movies=['gun','val','man']


//for
for(let hobby of employee.hobbies){
    console.log(hobby.toUpperCase)
}

//
function greetPerson(name:string){
if(name === 'Sreyas'){
    var greet = "Hello Sreyas"
}
else{
    var greet="hi there"
}
console.log(greet)

}

greetPerson("Sreyas");




for(let i=1; i<5; i++){
setTimeout(function(){console.log(i);} ,1000 );
}





/*

let person={
id=100,
greet: function(){
    setTimeout(() => {
        console.log(this.id);
    },1000);
}
}


person.greet(); // entho errror und



*/
/*

//call back function

let percentBonus = () => 0.1;

let getValue = function(value=10,bonus=value*percentBonus()){
    console.log(value+bonus);
    console.log(arguments.length)
};

getValue();
getValue(10);
getValue(20,30);
getValue(undefined,30);




//list of color

let  displayColors =function(message:any,colors:any){
console.log(message);
console.log(colors);

for(let color in colors){
    console.log(colors[color]);
}

}

let message = "list of colors";

displayColors(message ,'');
displayColors(message,'red');

*/
//named functions
function myFunctions(x) {
    return x * 5;
}
console.log(myFunctions(5));
var y = 10;
// declaration (y: number) : return type
function myFunctions1(y) {
    var z = y * 66;
    console.log(z);
    return;
}
console.log(myFunctions1(5));
//Anonymouss Functions---------unknown
var myFunction2 = function (a) {
    return a * 100;
};
console.log(myFunction2);
//optional parameters
function optionalfn(f, g) {
    //2 parameters
    return f + g;
}
console.log(optionalfn(5, 10));
function optionalfn1(f, g) {
    //2 parameters
    if (typeof g !== 'undefined') {
        return f + g + 5;
    }
    else {
    }
}
console.log(optionalfn(5, 10));
//classssss
var vehicles = /** @class */ (function () {
    //constructor
    function vehicles(twostroke) {
        this.engineconfig = "twostroke";
        this.name = "v8";
    }
    //methods
    vehicles.prototype.hitthegas = function () {
        return "ready to race ";
    };
    return vehicles;
}());
//object creation-----instantiation 
var s = new vehicles("Rtr");
console.log(s);
console.log(s.engineconfig);
console.log();
//inheritance -------
var sedan = /** @class */ (function (_super) {
    __extends(sedan, _super);
    function sedan() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return sedan;
}(vehicles));
/////hatch
var hatch = /** @class */ (function (_super) {
    __extends(hatch, _super);
    function hatch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return hatch;
}(vehicles));
var className = /** @class */ (function () {
    //propetries
    function className(x) {
        this.someProperty = x;
    }
    return className;
}());
