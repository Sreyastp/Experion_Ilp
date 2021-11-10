const  express = require('express')
const cors = require('cors')

const app = express()
const port = 4400


let books = [{
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},

{
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}];


var allowCrossDomain = function(req , res , next ){
    res.header('Access-Control-Allow-Origin' ,"*");
    res.header('Access-Control-Allow-Methods' ,'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers' ,'Content-Type');
    next();


}

app.use(cors());

app.use(allowCrossDomain);

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/book', (req, res) => {
    res.json(books);
});

app.get('/book/:isbn', (req, res) => {
    const isbn = req.params.isbn;

    for(let book of books){
        if(books.isbn === isbn){
            res.json(book);
            return;
        }
    }

    res.status(404).send('book not found')

});


app.listen(port, () => console.log(`BOOK app listening on port ${port}!`))

