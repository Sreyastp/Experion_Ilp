"use strict";
class employee {
    //constructor
    constructor(name, adhrno, adrs, depno, orderdtls) {
        this.empName = name;
        this.aadharNo = adhrno;
        this.address = adrs;
        this.deptNo = depno;
        this.orderdetails = orderdtls;
    }
    //fns
    getEmpName() {
        return this.empName;
    }
    getAdhNo() {
        return this.aadharNo;
    }
    getAddress() {
        return this.address;
    }
    getDeptNO() {
        return this.aadharNo;
    }
    getordrdtls() {
        return this.orderdetails;
    }
}
//employee object
let objectemployee = new employee('Ramesh', 100, 'palakkad', 1234, 'ordered a mobile');
console.log(objectemployee);
console.log(objectemployee.getEmpName());
console.log(objectemployee.getAdhNo());
console.log(objectemployee.getDeptNO());
console.log(objectemployee.getAddress());
console.log(objectemployee.getordrdtls());
//display output
let empdetails = 0;
let orderdetails = 1;
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
