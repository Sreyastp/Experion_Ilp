"use strict";
function clkFunction() {
    console.log("ready to go");
    //querySelector() method returns the first elemnts that matches 
    // a specified
    //specify for identifying the elements
    const button = document.querySelector("button");
    const txtName = document.getElementById("name");
    //event handling
    button === null || button === void 0 ? void 0 : button.addEventListener('click', handleClick);
    //function for handle Click
    function handleClick() {
        txtName.value;
        console.log(print1('Sreyas'));
    }
}
//not event 
function print1(numOne) {
    return numOne;
}
