const express = require('express');
const handlebars = require('express-handlebars');

const homeController = require('./src/home');
const catalogRouter = require('./src/catalog');

const app = express();

const hbs = handlebars.create({
    extname: '.hbs',
});

app.engine('.hbs', hbs.engine);
app.set('view engine', '.hbs');

app.use(express.urlencoded({extended: true}))
app.use('/content', express.static('static'));

app.get('/' , homeController);
app.use('/catalog', catalogRouter);

app.listen(3000, () => console.log('Server listening on port 3000'));


// Home page
// Catalog
// - list of products
// - create products
// - edit product
// - delete product
// * shopping cart
// About us