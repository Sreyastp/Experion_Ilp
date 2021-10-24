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
//step2-common derived from interface       //implement here
var Person = /** @class */ (function () {
    function Person(aadarCard, factName, address) {
        this.aadarCard = aadarCard;
        this.factName = factName;
        this.address = address;
    }
    Person.prototype.GetDetails = function () {
        return this.aadarCard + " " + this.address + " " + this.factName;
    };
    return Person;
}());
//steps3-employee/customers--person
var employeeFactory = /** @class */ (function (_super) {
    __extends(employeeFactory, _super);
    function employeeFactory(aadarCard, factName, address, departmentNo) {
        var _this = _super.call(this, aadarCard, factName, address) || this;
        _this.aadarCard = aadarCard;
        _this.factName = factName;
        _this.address = address;
        _this.departmentNo = departmentNo;
        return _this;
    }
    employeeFactory.prototype.GetDetails = function () {
        return "Employee Details " + _super.prototype.GetDetails.call(this) + " " + this.departmentNo;
    };
    return employeeFactory;
}(Person));
var customerFactory = /** @class */ (function (_super) {
    __extends(customerFactory, _super);
    function customerFactory(aadarCard, factName, address, orderdetails) {
        var _this = _super.call(this, aadarCard, factName, address) || this;
        _this.aadarCard = aadarCard;
        _this.factName = factName;
        _this.address = address;
        _this.orderdetails = orderdetails;
        return _this;
    }
    customerFactory.prototype.GetDetails = function () {
        return "Customer Details " + _super.prototype.GetDetails.call(this) + " " + this.orderdetails;
    };
    return customerFactory;
}(Person));
//step4-class employee/customers
//implementing methods
//steps 5-class--MainEntry--options
var Factory = /** @class */ (function () {
    function Factory() {
    }
    //static--singleton //oop we need to hiding implementation
    Factory.GetSomeBody = function (choice) {
        if (choice == 0) {
            return new employeeFactory(12345, "Adam", "Kozhikode", 12);
        }
        else {
            return new customerFactory(1256, "Mariyam", "UK", "Mobile");
        }
    };
    return Factory;
}());
//step 6-display result
var someBody = Factory.GetSomeBody(0);
console.log(someBody.GetDetails());
