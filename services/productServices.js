const Cube = require('../models/cube');
const uniqid = require('uniqid');
const fs = require('fs');
let productsData = require('../config/products.json');

function getAll() {
    return productsData;
};

function getOne(id) {
    return productsData.find(x => x.id == id);
};

function createProduct(data) {
    let cube = new Cube(
    uniqid(),
    data.name,
    data.description,
    data.imageUrl,
    data.level,
    );

    productsData.push(cube);

    fs.writeFile(__dirname + '/../config/products.json', JSON.stringify(productsData), (err) => {
        if (err) {
            console.log(err);
            return;
        };
    });
}

module.exports = {
    getAll,
    getOne,
    create: createProduct,
};