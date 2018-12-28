const express = require('express');
const app = express();
// para realizar uso de los parciales y helpers
const hbs = require('hbs');

require('./hbs/helpers'); //se importan los helpers

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //renderiza
    res.render('home.hbs', {
        nombre: 'cOSTA rICA' //nombre que se le pasa al helper capitalizar
    });
});

app.get('/about', (req, res) => {
    //renderiza
    res.render('about.hbs');
});

app.listen(port, () => {
    console.log(`Escuchando en el puerto${port}`);
});