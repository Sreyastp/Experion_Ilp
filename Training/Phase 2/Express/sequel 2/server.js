//install --------      npm i express sequelize sqlite3 -s
//start-----------   npm start`


const express = require('express');
const Sequelize = require('Sequelize');

const app = express();
const port = 8001;

const connection = new Sequelize('db' , 'user' , 'pass' ,{
    host:'localhost',
    dialect:'sqlite',
    storage:'db.sqllite',
    operatorAliases: false
})

const User = connection.define('Employee',{
    empname: Sequelize.STRING,
    adress:Sequelize.TEXT
})

connection.sync({
    logging:console.log
})
.then(() => {
    console.log("connection to database established successfully");
})
.catch(err=>{
    console.log('unable to connect to the database',err);
});


app.listen(port, () => {
    console.log('running server on port' + port);

})