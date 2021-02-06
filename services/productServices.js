const Cube = require('../models/cube');

async function getAll(query) {
    let products = await Cube.find({});

    if (query.search) {
        products = products.filter(x => x.name.toLowerCase().includes(query.search));
    }
    
    if (query.from) {
        products = products.filter(x => Number(x.level) >= query.from)
    }

    if (query.to) {
        products = products.filter(x => Number(x.level) <= query.to)
    }
    return products;
};

function getOne(id) {
    return Cube.findById(id);  
};

function createProduct(data) {
    let cube = new Cube(data);

    return cube.save();
};

module.exports = {
    getAll,
    getOne,
    create: createProduct,
};