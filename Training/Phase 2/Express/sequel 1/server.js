//install --------      npm i express sequelize sqlite3 -s
//start-----------   npm start`


const express = require('express');
const Sequelize = require('Sequelize');
const Op= Sequelize.Op;
const _USERS = require('./users.json');

const app = express();
const port = 8001;

const connection = new Sequelize('db' , 'user' , 'pass' ,{
    host:'localhost',
    dialect:'sqlite',
    storage:'db.sqllite',
    operatorAliases: false,
    define: {
        freezeTableName:true
    }
})

const User = connection.define('User',{
    name: Sequelize.STRING,
    email:{
        type:Sequelize.STRING,
        validate:{
            isEmail:true
        }
    },
    password:{
        type:Sequelize.STRING,
        validate:{
            isAlphanumeric:true
        }
    }

})

connection.sync({
    // logging:console.log,
    // force: true
})
.then(()=> {
    User.bulkCreate(_USERS)
    .catch(error => {
        console.log(error);
    })
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