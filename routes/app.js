const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Home Page' });
});

router.get('/index_perfume', (req, res) => {
    res.render('index_perfume', { title: 'Perfumes' });
});

router.get('/designer', (req, res) => {
    res.render('designer', { title: 'Designers' });
});

router.get('/attar', (req, res) => {
    res.render('attar', { title: 'Attars' });
});

router.get('/deos', (req, res) => {
    res.render('deos', { title: 'Deos' });
});

router.get('/bestsellers', (req, res) => {
    res.render('bestsellers', { title: 'Bestsellers' });
});

router.get('/combos', (req, res) => {
    res.render('combos', { title: 'Combos' });
});


router.get('/cart', (req, res) => {
    res.render('cart', { title: 'Cart' });
});

router.get('/signin', (req, res) => {
    res.render('sigin', { title: 'SignIn' });
});

router.get('/signup', (req, res) => {
    res.render('singup', { title: 'SignUp' });
});

router.get('/afnan', (req, res) => {
    res.render('innerParfum/afnan', { title: 'Afnan' });
});



module.exports = router;
