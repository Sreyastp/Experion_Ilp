
import { Email, ID, RegEx, Type, Options, Optional, Nullable, Alias, Any, All, validate } from 'validate-typescript';
 const validators = require('validator');
 
function ZaPhoneNumber() {
    return Alias(RegEx(/^((\+27|0)\d{9})$/), ZaPhoneNumber.name);
}
 
class CustomMessage {
    constructor(public message: string) {}
}
 
const schema = {
    id: ID(),
    children: [ID()],
    username: Type(String),
    email: Email(),
    gmail: RegEx(/.+@gmail.com/),
    phone: ZaPhoneNumber(),
    gender: Options(['m', 'f', 'o']),
    married: Type(Boolean),
    names: {
        first: Type(String),
        middle: Optional(Type(String)),
        last: Type(String)
    }
    message: Type(CustomMessage)
}
 
const input = {
    id: 17,
    children: [1,2,'3'],
    username: 'solomon',
    email: 'solomon@validate-typescript.com',
    gmail: 'solomon@gmail.com',
    phone: '+27824392186'
    gender: 'm',
    married: true,
    names: {
        first: 'Solomon',
        last: 'Dube',
    }
    message: new CustomMessage('Sawubona Mhlaba')
}
 
try {
    const input = validate(schema, input);
    console.log(input); // no validation error
} catch (error) {
    console.log(error); // validation error
}