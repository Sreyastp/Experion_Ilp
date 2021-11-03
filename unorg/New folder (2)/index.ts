import { Email, ID, RegEx, Type, Options, Optional, Nullable, Alias, Any, All, validate } from 'validate-typescript';

const schema = {
    id: ID(),
    children: [ID()],
    username: Type(String),
    email: Email(),
    gmail: RegEx(/.+@gmail.com/),
    gender: Options(['m', 'f', 'o']),
    married: Type(Boolean),
    names: {
        first: Type(String),
        middle: Optional(Type(String)),
        last: Type(String)
    }
  
}
 


    const input = {
        id: 17,
        children: [1,2,'3'],
        username: 'solomon',
        email: 'solomon@validate-typescript.com',
        gmail: 'solomon@gmail.com',
        phone: '+27824392186',
        gender: 'm',
        married: true,
        names: {
            first: 'Solomon',
            last: 'Dube',
        }
        
    }
    



