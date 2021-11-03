//requires npm install validate-typescript
//importing typescript validation
import { Email, ID, RegEx, Type, Options, Optional, Nullable, Alias, Any, All, validate } from 'validate-typescript';

const form = document.querySelector('#new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const a = document.querySelector('#validationDefault01') as HTMLInputElement;
const b = document.querySelector('#validationDefault02') as HTMLInputElement;
const c = document.querySelector('#validationDefault03') as HTMLInputElement;
const d = document.querySelector('#validationDefault04') as HTMLInputElement;
const e = document.querySelector('#validationDefault14') as HTMLInputElement;
const f = document.querySelector('#validationDefault05') as HTMLInputElement;
const g = document.querySelector('#validationDefault06') as HTMLInputElement;
const h = document.querySelector('#validationDefault07') as HTMLInputElement;
const i = document.querySelector('#validationDefault08') as HTMLInputElement;
const j = document.querySelector('#validationDefault09') as HTMLInputElement;
const k = document.querySelector('#validationDefault10') as HTMLInputElement;
const l = document.querySelector('#validationDefault11') as HTMLInputElement;
const m = document.querySelector('#validationDefault12') as HTMLInputElement;
const n = document.querySelector('#validationDefault13') as HTMLInputElement;
const o = document.querySelector('#invalidCheck2') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
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
  constructor(public message: string) {}
}

const schema = {
  
  firstname: Type(String),
  lastname: Type(String),
  age: Optional(Type(String)),
  phoneNumber: ZaPhoneNumber(),
  gender: Options(['male', 'female', 'other']),
  message: Type(CustomMessage)
}