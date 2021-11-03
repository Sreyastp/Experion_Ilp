"use strict";
class Car {
    //constructor
    constructor(engine, transmission, fourwheeldrive, noofgears) {
        this.engine = engine;
        this.transmission = transmission;
        this.fourwheeldrive = fourwheeldrive;
        this.noofgears = noofgears;
    }
    //function/method
    dispCar() {
        return console.log("The Engine is : " + `${this.engine}` + "Transmission is " + `hh ${this.transmission}` + "having " +
            this.noofgears + "no of Gears and it is fourwheel drive?" + this.fourwheeldrive);
    }
    ;
}
//instantiating an object
//object
let Ocar = new Car("Over Squared", "DCT", true, 6); //object is created
//access the field
console.log("Printing the Details of the car's ENGINE :  " + Ocar.engine);
//access the function
Ocar.dispCar();
//inheritance
class Suv extends Car {
    //constructor
    constructor(price, groundclearance, engine, transmission, fourwheeldrive, noofgears) {
        //// call the constructor of the Parent  class Car:
        super(engine, transmission, fourwheeldrive, noofgears);
        this.price = price;
        this.groundClearance = groundclearance;
    }
    //suv function
    dispSuv() {
        console.log("This is an Function in SUV");
    }
    ;
}
//creating an object for the child class car
let Osuv = new Suv(400000, 255, "Mperformance", "X-drive", true, 8);
//calling the functions of the parent class car 
console.log(Osuv.dispCar);
console.log(Osuv.dispSuv);
//interfaces with objects
let rtr = {
    Speed: 130,
    accln: "faster than light",
    mileage: 40,
    race(track) {
        return console.log(track);
    },
    burntime() {
        return 100;
    }
};
//interface with objects
let rr = {
    Speed: 0,
    accln: "lightnig fast",
    mileage: 0,
    race: function (track) {
        return "Ready to Race";
    },
    burntime: function () {
        return 1200;
    }
};
//interfaces wit class
class rtrcls {
    //constructor for interface class
    constructor(name, Speed, accln, mileage) {
        this.name = name;
        this.Speed = Speed;
        this.accln = accln;
        this.mileage = mileage;
    }
    race(track) {
        return "just nothing";
    }
    burntime() {
        return 3780;
    }
}
//call backs
//synchrous
function addNumber(numOne, numTwo, printCb) {
    //console.log(numOne+numTwo);
    printCb("result is", numOne + numTwo);
}
function prettyPrint(label, val) {
    //output: result is :300
    console.log('-----------');
    console.log(`${label} : ${val}`);
    console.log('-----------');
}
addNumber(100, 200, prettyPrint);
//Asynchronous 
console.log("before");
setTimeout(() => console.log('Welcome Guys'), 2000
//async //url-- REST API
//response - accept /reject -- promise
//await
);
console.log("After");
