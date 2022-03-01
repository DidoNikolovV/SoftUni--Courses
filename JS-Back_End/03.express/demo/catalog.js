const { Router } = require('express');

const router = Router();

router.get('/:productId', (req, res) => {
    console.log(req.params);
    res.send('Product page');
})

router.get('/', (req, res) => {
    res.send('Catalog');
})
router.get('/:id/details', (req, res) => {
    console.log(req.params);
    res.send('Details page');
})

router.get('/:category/:product', (req, res) => {
    console.log(req.params);
    res.send('Product from category');
})

module.exports = router;
