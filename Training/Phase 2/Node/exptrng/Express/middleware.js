var express = require('express')
var app = express()

//middleware function to log request protocol
app.use('/things', function(req,res,next){
    console.log("a request for things recived at " + new Date());
    next();
});

//route handler that sends the response
app.get('/things',function(req,res){
    res.send('things');
});

app.listen(3000);