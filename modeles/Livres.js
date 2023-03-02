const mongoose = require("mongoose")

let schemaLivre = mongoose.Schema({
    _id:{
        type: String,
        required: true
    },
    titre:{
        type: String,
        required: true
    },
    auteur:{
        type: String,
        required: true
    },
    editeur:{
        type: String,
        required: true
    },
    langue:{
        type: String,
        required: true
    },
    isbn:{
        type: String,
        required: true
    },
    prix:{
        type: Number,
        required: false
    },
    description:{
        type: String,
        required: true
    },
    nbPage:{
        type: Number,
        required: false
    }
});

let Livres = module.exports = mongoose.model("Livres", schemaLivre);

module.exports.getLivres = (callback, limit) =>{
    Livres.find(callback).limit(limit);
}

module.exports.getLivreParChamp = (nomChamp, critere, callback) => {
    // let query = new Object();
    // query[nomChamp] = RegExp(critere);
    const query = {[nomChamp]: RegExp(critere)};
    console.log(query);
    Livres.find(query, callback);
}

module.exports.ajoutLivre = (livre, callback) => {
    
}