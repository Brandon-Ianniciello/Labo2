const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.send("Utilisez /api/livres pour faire appel a l'api");
});

router.get('/autre',(req,res)=>{
    res.send("Voici la page pour la route /autre");
});

module.exports = router;