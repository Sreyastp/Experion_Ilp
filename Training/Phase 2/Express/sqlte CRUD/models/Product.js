// const Sequelize = require('sequelize');
// const db = require('../config/database');

// const Gig = db.define('gig', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true,
//         autoIncrement: true
//     },
//     title: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     technologies: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     description: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     budget: {
//         type: Sequelize.STRING,
//         allowNull: false
//     },
//     contact_email: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// });

// module.exports = Gig;




const Sequelize = require('sequelize');
const db = require('../config/database');

const Product = db.define('product', {
    productId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    productName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    manufacturingDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expirationDate: {
        type: Sequelize.STRING,
        allowNull: false
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Product;