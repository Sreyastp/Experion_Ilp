"use strict";
//step2-common derived from interface       //implement here
class Person {
    constructor(aadarCard, factName, address) {
        this.aadarCard = aadarCard;
        this.factName = factName;
        this.address = address;
    }
    GetDetails() {
        return this.aadarCard + " " + this.address + " " + this.factName;
    }
}
//steps3-employee/customers--person
class employeeFactory extends Person {
    constructor(aadarCard, factName, address, departmentNo) {
        super(aadarCard, factName, address);
        this.aadarCard = aadarCard;
        this.factName = factName;
        this.address = address;
        this.departmentNo = departmentNo;
    }
    GetDetails() {
        return "Employee Details " + super.GetDetails() + " " + this.departmentNo;
    }
}
class customerFactory extends Person {
    constructor(aadarCard, factName, address, orderdetails) {
        super(aadarCard, factName, address);
        this.aadarCard = aadarCard;
        this.factName = factName;
        this.address = address;
        this.orderdetails = orderdetails;
    }
    GetDetails() {
        return "Customer Details " + super.GetDetails() + " " + this.orderdetails;
    }
}
//step4-class employee/customers
//implementing methods
//steps 5-class--MainEntry--options
class Factory {
    //static--singleton //oop we need to hiding implementation
    static GetSomeBody(choice) {
        if (choice == 0) {
            return new employeeFactory(12345, "Adam", "Kozhikode", 12);
        }
        else {
            return new customerFactory(1256, "Mariyam", "UK", "Mobile");
        }
    }
}
//step 6-display result
let someBody = Factory.GetSomeBody(0);
console.log(someBody.GetDetails());
