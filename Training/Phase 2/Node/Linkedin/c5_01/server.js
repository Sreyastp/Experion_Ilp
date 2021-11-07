var express = require("express")

app = express()

app.use(express.static(__dirname))

var server = app.listen(3000 ,() => {
    console.log('server is listening to port ' , server.address().port)
})