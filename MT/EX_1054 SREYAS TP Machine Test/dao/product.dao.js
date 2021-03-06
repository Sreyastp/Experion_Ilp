const Product = require('../models/Product');
var productDao = {
    findAll: findAll,
    create: create,
    findById: findById,
    deleteById: deleteById,
    updateProduct: updateProduct
}

function findAll() {
    return Product.findAll();
}

function findById(id) {
    return Product.findByPk(id);
}

function deleteById(id) {
    return Product.destroy({ where: { id: id } });
}

function create(product) {
    var newProduct = new Product(product);
    return newProduct.save();
}

function updateProduct(product, id) {
    var updateProduct = {
        id: product.id,
        productName: product.productName,
        price: product.price,
        manufacturingDate: product.manufacturingDate,
        expirationDate: product.expirationDate,
        brand: product.brand,


    };
    return Product.update(updateProduct, { where: { id: id } });
}
module.exports = productDao;