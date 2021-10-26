const form = document.querySelector('.new-item-form') as HTMLFormElement;
console.log(form.children);
//inputs
const type = document.querySelector('#type') as HTMLFormElement;
const tofrom = document.querySelector('#tofrom') as HTMLFormElement;
const details = document.querySelector('#details') as HTMLFormElement;
const amount = document.querySelector('#amount') as HTMLFormElement;
//diaplaying in the console
form.addEventListener('submit',(e:Event)=> {
    e.preventDefault();
    console.log(
        type.value,
        tofrom.value,
        details.value,
        amount.valueAsNumber
    );
});