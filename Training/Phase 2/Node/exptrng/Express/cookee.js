var express = require('express');
var app = express();

app.get('/',function(req,res){
    res.cookie('name','khan').send('the cookie has set '); 
});

app.listen(4000);