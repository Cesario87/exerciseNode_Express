const express = require('express')
const path = require('path');

const app = express()
const port = 3000;

app.use('/static', express.static('public')); //ESTO NO HACE FALTA

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    const page = 'HOME';
    const imagen = 'testimage.jpg';
    res.render('home', {page, imagen});
})

app.get('/contact', (req, res) => {
    const page = 'CONTACT';
    const imagen = 'chair.jpg';
    res.render('home', {page, imagen});
})

app.get('/about', (req, res) => {
    const page = 'ABOUT';
    const imagen = 'viking.jpg';
    res.render('home', {page, imagen})
})

console.log(__dirname);

app.listen(port);
console.log('Server started at http://localhost:' + port);