//async
const fs = require('fs');
fs.readFile(__filename, function cb(err,data){

    console.log('file data is ' , data)

});


console.log('test');