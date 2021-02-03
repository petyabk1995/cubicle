const {Router} = require('express');
const router = Router();
const productService = require('../services/productServices');

router.get('/', (req, res) => {
    let products = productService.getAll();
    res.render('home', {title: 'Home', products});
});

router.get('/create', (req, res) => {
    res.render('create', {title: 'Create'});
});

router.post('/create', (req, res) => {
    //need to validate inputs
    
    productService.create(req.body);

    res.redirect('/');
});

router.get('/details/:productId', (req, res) => {
    console.log(productService.getOne(req.params.productId));
    let product = productService.getOne(req.params.productId);

    res.render('details', {title: 'Product details', product});
})


module.exports = router;