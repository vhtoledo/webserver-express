const express = require('express');
const hbs = require('hbs');
require('dotenv').config();

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

// Servir contenido estático
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Victor Toledo',
        titulo: 'Sitio Oficial'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Victor Toledo',
        titulo: 'Sitio Oficial'
    });
});

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Victor Toledo',
        titulo: 'Sitio Oficial'
    });
});


app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/404.html')
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});