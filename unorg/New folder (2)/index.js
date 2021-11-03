"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validate_typescript_1 = require("validate-typescript");
// let schemaa = {
//     myNumber: Type(Number),      // type: Number
//     myString: Type(String),      // type: String
// }
// let schema1 = {
//     number49:    49,              // type: number
//     myCountry:   'South Africa',  // type: string
// }
var schema = {
    id: (0, validate_typescript_1.ID)(),
    children: [(0, validate_typescript_1.ID)()],
    username: (0, validate_typescript_1.Type)(String),
    email: (0, validate_typescript_1.Email)(),
    gmail: (0, validate_typescript_1.RegEx)(/.+@gmail.com/),
    gender: (0, validate_typescript_1.Options)(['m', 'f', 'o']),
    married: (0, validate_typescript_1.Type)(Boolean),
    names: {
        first: (0, validate_typescript_1.Type)(String),
        middle: (0, validate_typescript_1.Optional)((0, validate_typescript_1.Type)(String)),
        last: (0, validate_typescript_1.Type)(String)
    }
};
try {
    var input = {
        id: 17,
        children: [1, 2, '3'],
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
    };
}
catch (error) {
    console.log('die');
}
