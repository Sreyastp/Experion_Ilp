const express = require('express');
const Sequelize = require('Sequelize');

const app = express();
const port = 8001;



app.listen(port, () => {
    console.log('running server on port' + port);

})