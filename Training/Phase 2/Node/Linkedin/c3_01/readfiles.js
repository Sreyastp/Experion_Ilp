var fs = require('fs')

 var data = require('./data.json')
 console.log(data.name)

fs.readFile('./data.json','utf-8',(err,data) => {         //error it is showing undefined
    var data = JSON.parse(data)
    console.log(data.name)
})