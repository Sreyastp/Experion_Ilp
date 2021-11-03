
//requires npm install validate-typescript
//importing typescript validation
import { Email, ID, RegEx, Type, Options, Optional, Nullable, Alias, Any, All, validate } from 'validate-typescript';

const form = document.querySelector('#new-item-form') as HTMLFormElement;
console.log(form.children);

// inputs
const firstname = document.querySelector('#validationDefault01') as HTMLInputElement;
const lastname = document.querySelector('#validationDefault02') as HTMLInputElement;
const Age = document.querySelector('#validationDefault03') as HTMLInputElement;
const bloodgroup = document.querySelector('#validationDefault04') as HTMLInputElement;
const gender = document.querySelector('#validationDefault14') as HTMLInputElement;
const phone = document.querySelector('#validationDefault05') as HTMLInputElement;
const source = document.querySelector('#validationDefault06') as HTMLInputElement;
const destn = document.querySelector('#validationDefault07') as HTMLInputElement;
const i = document.querySelector('#validationDefault08') as HTMLInputElement;
const j = document.querySelector('#validationDefault09') as HTMLInputElement;
const k = document.querySelector('#validationDefault10') as HTMLInputElement;
const l = document.querySelector('#validationDefault11') as HTMLInputElement;
const m = document.querySelector('#validationDefault12') as HTMLInputElement;
const n = document.querySelector('#validationDefault13') as HTMLInputElement;
//const o = document.querySelector('#invalidCheck2') as HTMLInputElement;

form.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(`The First Name is ${firstname.value}`);
              
  console.log(`The Last Name is ${lastname.value}`);
  console.log(`Age  is ${Age.value}`);
  console.log(`Blood Group is ${bloodgroup.value}`);
  console.log(`Gender is ${gender.value}`);
  console.log(`Contact Number ${phone.value}`);
  console.log(`Source is ${source.value}`);
  console.log(`Destination is 3 is ${destn.value}`);
  console.log(`Package Type is ${j.value}`);
  console.log(`Package Name Genre 2 is ${k.value}`);
  console.log(`No of days is ${l.value}`);
  console.log(`No of people 1 is ${n.value}`);
  
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
  Age: Optional(Type(String)),
  phone: ZaPhoneNumber(),
  gender: Options(['male', 'female', 'other']),
  message: Type(CustomMessage)
}
form.addEventListener('submit',(e:Event)=> {
    
  try {
      const input1 = validate(schema, input);
          if (input1){
              console.log(input);
          }  
          
      } // no validation error
   catch (error) {
      e.preventDefault();
      console.log(error); // validation error
  }
  })