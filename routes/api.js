const express = require('express');
const router = express.Router();

const Livres = require('../modeles/Livres.js');

const Users = require('../modeles/Users')

router.get('/livres',(req,res)=>{
    Livres.getLivres((err,livres) =>{
        if(err) throw err;
        res.json(livres);
    },5);
});

router.post('/livres',(req,res) => {
    let livre = req.body;
    console.log(livre);
    Livres.ajoutLivre(livre, (err, retourLivre)=>{
        if(err) throw err;
        res.json(retourLivre);
    })
})

router.get('/livres/titre/:titreLivre', (requete, reponse) => {
    Livres.getLivreParChamp("titre", requete.params.titreLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});

router.get('/livres/auteur/:auteurLivre', (requete, reponse) => {
    Livres.getLivreParChamp("auteur", requete.params.auteurLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});
router.get('/livres/isbn/:isbnLivre', (requete, reponse) => {
    Livres.getLivreParChamp("isbn", requete.params.isbnLivre, (err, livre)=>{
        if (err) throw err;
        reponse.json(livre);
    });
});

router.get('/users/nom/:nomUser', (requete, reponse) => {
    Users.getUserParChamp("nom", requete.params.nomUser, (err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 10);
});

router.get('/users/login/:loginUser', (requete, reponse) => {
    Users.getUserParChamp("login", requete.params.loginUser, (err, users)=>{
        if (err) throw err;
        reponse.json(users);
    }, 10);
});

router.get('/users',(req,res)=>{
    Users.getUsers((err,users) =>{
        if(err) throw err;
        res.json(users);
    },3);
});

router.get('/', (req,res)=>{
    res.send("Utiliser /api/livres pour voir les livres")
});

module.exports = router;