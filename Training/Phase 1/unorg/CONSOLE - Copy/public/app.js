//requires npm install validate-typescript
//importing typescript validation
import { RegEx, Type, Options, Optional, Alias } from 'validate-typescript';
const form = document.querySelector('#new-item-form');
console.log(form.children);
// inputs
const a = document.querySelector('#validationDefault01');
const b = document.querySelector('#validationDefault02');
const c = document.querySelector('#validationDefault03');
const d = document.querySelector('#validationDefault04');
const e = document.querySelector('#validationDefault14');
const f = document.querySelector('#validationDefault05');
const g = document.querySelector('#validationDefault06');
const h = document.querySelector('#validationDefault07');
const i = document.querySelector('#validationDefault08');
const j = document.querySelector('#validationDefault09');
const k = document.querySelector('#validationDefault10');
const l = document.querySelector('#validationDefault11');
const m = document.querySelector('#validationDefault12');
const n = document.querySelector('#validationDefault13');
const o = document.querySelector('#invalidCheck2');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log(`The First Name is ${a.value}`);
    console.log(`The Last Name is ${b.value}`);
    console.log(`Age  is ${c.value}`);
    console.log(`Gender is ${d.value}`);
    console.log(`Occupation is ${f.value}`);
    console.log(`Hobby 1 ${g.value}`);
    console.log(`Hobby 2 is ${h.value}`);
    console.log(`Hobby 3 is ${i.value}`);
    console.log(`Favourite Genre 1 is ${j.value}`);
    console.log(`Favourite Genre 2 is ${k.value}`);
    console.log(`Favourite Genre 3 is ${l.value}`);
    console.log(`Favourite Food 1 is ${n.value}`);
    console.log(`Favourite Food 2 ${m.value}`);
    console.log(`Favourite Food 3 ${o.value}`);
});
function ZaPhoneNumber() {
    return Alias(RegEx(/^((\+27|0)\d{9})$/), ZaPhoneNumber.name);
}
class CustomMessage {
    constructor(message) {
        this.message = message;
    }
}
const schema = {
    firstname: Type(String),
    lastname: Type(String),
    age: Optional(Type(String)),
    phoneNumber: ZaPhoneNumber(),
    gender: Options(['male', 'female', 'other']),
    message: Type(CustomMessage)
};
