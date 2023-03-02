const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.set("strictQuery",false);
mongoose.connect('mongodb://localhost:27017/Labo01');

const {getLivres} = require('./modeles/Livres.js');
const Livres = require('./modeles/Livres.js');

app.use(express.json());

let db = mongoose.connection;
console.log('message');
db.on('error',(err) => {
    console.error('erreur de BD: ', err);
});
db.once('open',() =>{
    console.log('Connexion OK');
})


app.use('/api', require('./routes/api'));
app.use('/', require('./routes/index'));


app.listen(8000);
console.log('Service Web sur le port 8000 fonctionel!')

