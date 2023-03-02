const mongoose = require("mongoose");

let schemaUser = mongoose.Schema({
    _id:{
        type:String,
        required: true
    },
    login:{
        type: String,
        required: true
    },
    pwd:{
        type: String,
        required: true
    },
    nom:{
        type: String,
        required: true
    }
});

let Users = module.exports = mongoose.model("users", schemaUser);

module.exports.getUsers = (callback,limit) => {
    Users.find(callback).limit(limit);
} 

module.exports.getUserParChamp = (champ, critere, callback, limit) => {
    const query = {[champ]: RegExp(critere)};
    console.log(query);
    Users.find(query, callback).limit(limit);
}