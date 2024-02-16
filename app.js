const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/assets/'));

app.get('/', async (req, res) => {
    try {        
        res.render('index');
    } catch (error) {
        console.error(error);
        res.status(500).send("Une erreur s'est produite");
    }
});

module.exports = app;