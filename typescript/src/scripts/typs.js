"use strict";
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
//ENUM
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
    Role[Role["CORDINATOR"] = 3] = "CORDINATOR";
    Role[Role["MANAGER"] = 4] = "MANAGER";
})(Role || (Role = {}));
var employee = {
    name: 'Sreyas',
    age: 23,
    hobbies: ['Gaming', 'triping', 'cool'],
    role: [2, 'author']
};
console.log(employee);
console.log(employee.name);
console.log(employee.age);
var movies;
movies = ['gun', 'val', 'man'];
//for
for (var _i = 0, _a = employee.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase);
}
//
function greetPerson(name) {
    if (name === 'Sreyas') {
        var greet = "Hello Sreyas";
    }
    else {
        var greet = "hi there";
    }
    console.log(greet);
}
greetPerson("Sreyas");
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
for (var i = 1; i < 5; i++) {
    _loop_1(i);
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
//call back function
var percentBonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * percentBonus(); }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(10);
getValue(20, 30);
getValue(undefined, 30);
//list of color
var displayColors = function (message, colors) {
    console.log(message);
    console.log(colors);
    for (var color in colors) {
        console.log(colors[color]);
    }
};
var message = "list of colors";
displayColors(message, '');
displayColors(message, 'red');
