"use strict";
var employee = /** @class */ (function () {
    //constructor
    function employee(name, adhrno, adrs, depno, orderdtls) {
        this.empName = name;
        this.aadharNo = adhrno;
        this.address = adrs;
        this.deptNo = depno;
        this.orderdetails = orderdtls;
    }
    //fns
    employee.prototype.getEmpName = function () {
        return this.empName;
    };
    employee.prototype.getAdhNo = function () {
        return this.aadharNo;
    };
    employee.prototype.getAddress = function () {
        return this.address;
    };
    employee.prototype.getDeptNO = function () {
        return this.aadharNo;
    };
    employee.prototype.getordrdtls = function () {
        return this.orderdetails;
    };
    return employee;
}());
//employee object
var objectemployee = new employee('Ramesh', 100, 'palakkad', 1234, 'ordered a mobile');
console.log(objectemployee);
console.log(objectemployee.getEmpName());
console.log(objectemployee.getAdhNo());
console.log(objectemployee.getDeptNO());
console.log(objectemployee.getAddress());
console.log(objectemployee.getordrdtls());
//display output
var empdetails = 0;
var orderdetails = 1;
/// condition for output
if (empdetails == 1) {
    console.log(objectemployee.getEmpName());
    console.log(objectemployee.getAdhNo());
    console.log(objectemployee.getDeptNO());
    console.log(objectemployee.getAddress());
}
else if (orderdetails == 0) {
    console.log(objectemployee.getordrdtls());
}
