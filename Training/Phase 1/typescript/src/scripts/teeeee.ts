type ValidationMessages = Partial<Record<'valueMissing' | 
'tooShort' | 'tooLong' | 'rangeUnderflow' | 
'rangeOverflow' | 'typeMismatch' | 'patternMismatch', 
string>>;


class FormValidator {



public setValidationMessages(ctrlID: string, msgEleID: string,
    messages: ValidationMessages) {

    let element:any = document.querySelector("#" + ctrlID);

    element.addEventListener("input", (evt) => {

        let flag: boolean;

        if (element.validity.valueMissing) {
            if (typeof messages.valueMissing !== "undefined") {
                element.setCustomValidity(messages.valueMissing);
                flag = true;
            }
        }

        if (element.validity.tooShort) {
            if (typeof messages.tooShort !== "undefined") {
                element.setCustomValidity(messages.tooShort);
                flag = true;
            }
        }

        if (element.validity.tooLong) {
            if (typeof messages.tooLong !== "undefined") {
                element.setCustomValidity(messages.tooLong);
                flag = true;
            }
        }

        if (element.validity.rangeUnderflow) {
            if (typeof messages.rangeUnderflow !== "undefined") {
                element.setCustomValidity(messages.rangeUnderflow);
                flag = true;
            }
        }

        if (element.validity.rangeOverflow) {
            if (typeof messages.rangeOverflow !== "undefined") {
                element.setCustomValidity(messages.rangeOverflow);
                flag = true;
            }
        }


        if (element.validity.patternMismatch) {
            if (typeof messages.patternMismatch !== "undefined") {
                element.setCustomValidity(messages.patternMismatch);
                flag = true;
            }
        }

        if (element.validity.typeMismatch) {
            if (typeof messages.typeMismatch !== "undefined") {
                element.setCustomValidity(messages.typeMismatch);
                flag = true;
            }
        }

        if (flag) {
            document.querySelector("#" + msgEleID).
innerHTML = element.validationMessage;
        }
        else {
            element.setCustomValidity("");
            document.querySelector("#" + msgEleID).innerHTML = "";
        }
    });
}

showValidationSummary(formID:string, listID:string) {

let form :any = document.querySelector("#" + formID);
let errList = document.querySelector("#" + listID);
errList.innerHTML = "";

if (!form.checkValidity()) {

    for (let i = 0; i < form.elements.length; i++){

        let element = form.elements[i];

        if (!element.checkValidity()) {

            errList.insertAdjacentHTML('beforeend', 
"<li>" + element.validationMessage + "</li>");

        }
    };
    form.reportValidity();
}
}
}

