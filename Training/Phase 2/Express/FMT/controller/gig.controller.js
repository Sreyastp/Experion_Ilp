const productDao = require('../dao/product.dao');
var productController = {
    addGig: addGig,
    findProduct: findProduct,
    findGigById: findGigById,
    updateGig: updateGig,
    deleteById: deleteById
}

function addGig(req, res) {
    let product = req.body;
    productDao.create(product).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function findGigById(req, res) {
    productDao.findById(req.params.id).
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

function deleteById(req, res) {
    productDao.deleteById(req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig deleted successfully",
                product: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function updateGig(req, res) {
    productDao.updateGig(req.body, req.params.id).
        then((data) => {
            res.status(200).json({
                message: "Gig updated successfully",
                product: data
            })
        })
        .catch((error) => {
            console.log(error);
        });
}

function findProduct(req, res) {
    productDao.findAll().
        then((data) => {
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
        });
}

module.exports = productController;