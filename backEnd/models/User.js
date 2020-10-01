const mongoose = require('mongoose')

// Définir un schéma via mongoose, montre comment notre table doit fonctionner. On peut faire des vérifs de champs ici
const userSchema = mongoose.Schema({
    pseudo: {type: String, required:true},
    mdp:{type: String, required:true}
})

module.exports = mongoose.model("User", userSchema) // User est le nom donné à la table utilisant le schema userSchema