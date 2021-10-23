"use strict";
function initFunction() {
    console.log("ready to go");
    //querySelector() method returns the first elemnts that matches 
    // a specified
    //specify for identifying the elements
    var button = document.querySelector("button");
    var txtName = document.getElementById("name");
    var txtOne = document.getElementById("numOne");
    var txtTwo = document.getElementById("numTwo");
    //event handling
    button === null || button === void 0 ? void 0 : button.addEventListener('click', handleClick);
    //function for handle Click
    function handleClick() {
        txtName.value;
        txtOne.value;
        txtTwo.value;
        console.log(addHTMLNumber(txtOne.value, txtTwo.value));
    }
}
//not event 
function addHTMLNumber(numOne, numTwo) {
    return +numOne + +numTwo;
}
