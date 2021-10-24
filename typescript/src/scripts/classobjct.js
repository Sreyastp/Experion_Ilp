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
var Car = /** @class */ (function () {
    //constructor
    function Car(engine, transmission, fourwheeldrive, noofgears) {
        this.engine = engine;
        this.transmission = transmission;
        this.fourwheeldrive = fourwheeldrive;
        this.noofgears = noofgears;
    }
    //function/method
    Car.prototype.dispCar = function () {
        return console.log("The Engine is : " + ("" + this.engine) + "Transmission is " + ("hh " + this.transmission) + "having " +
            this.noofgears + "no of Gears and it is fourwheel drive?" + this.fourwheeldrive);
    };
    ;
    return Car;
}());
//instantiating an object
//object
var Ocar = new Car("Over Squared", "DCT", true, 6); //object is created
//access the field
console.log("Printing the Details of the car's ENGINE :  " + Ocar.engine);
//access the function
Ocar.dispCar();
//inheritance
var Suv = /** @class */ (function (_super) {
    __extends(Suv, _super);
    //constructor
    function Suv(price, groundclearance, engine, transmission, fourwheeldrive, noofgears) {
        var _this = 
        //// call the constructor of the Parent  class Car:
        _super.call(this, engine, transmission, fourwheeldrive, noofgears) || this;
        _this.price = price;
        _this.groundClearance = groundclearance;
        return _this;
    }
    //suv function
    Suv.prototype.dispSuv = function () {
        console.log("This is an Function in SUV");
    };
    ;
    return Suv;
}(Car));
//creating an object for the child class car
var Osuv = new Suv(400000, 255, "Mperformance", "X-drive", true, 8);
//calling the functions of the parent class car 
console.log(Osuv.dispCar);
console.log(Osuv.dispSuv);
var rtr = {
    Speed: 130,
    accln: "faster than light",
    mileage: 40,
    race: function (track) {
        return console.log(track);
    },
    burntime: function () {
        return 100;
    }
};
var rr = {
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
