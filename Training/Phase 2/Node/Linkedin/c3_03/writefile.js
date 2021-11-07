var fs =require('fs')

data = {
    name : "sreyas"
}

//file name, stringifying data and saving it to data file and cb
fs.writeFile('data.json', JSON.stringify(data), (err) => {
    console.log('Write file completed' ,err)
})