const mongoose = require('mongoose')

// Définir un schéma via mongoose, montre comment notre table doit fonctionner. On peut faire des vérifs de champs ici
const recipeSchema = mongoose.Schema({
    title:{type: String, required:true, unique:true}, //rajouter un champs author=id du user et mettre title unique
    txt:{type: String, required:true},
    author:{type: String, required:true},
    like:{type:Boolean, required:true},
    //img:{type:String, required:true},
    comments:{type: String, required:false}
})

module.exports = mongoose.model("Recipe", recipeSchema)