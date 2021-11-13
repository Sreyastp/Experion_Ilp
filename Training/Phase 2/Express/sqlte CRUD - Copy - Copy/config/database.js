const { Sequelize } = require('sequelize');
const db = new Sequelize('codegig', 'sqlite', 'Welcome123', {
    host: 'localhost',
    dialect: 'sqlite',

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    storage: 'dbsave.sqlite',
    operatorsAliases: false,   //this is a flag
    define:{
        freezeTableName: true
    },
});

module.exports = db;