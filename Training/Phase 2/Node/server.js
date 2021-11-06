const res = require('express/lib/response');
const http = require('http');
const server = http.createServer((req,res) => {
    res.end('Hello World\n');
    res.end(console.log('hello'));

});

server.listen(4242, () => {
    console.log('Server is running...');
});



