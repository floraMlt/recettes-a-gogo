const Recipe = require('../models/Recipe');

exports.newRecipe = async (req, res, next)=>{
    new Recipe({title:req.body.recipe.title, txt:req.body.recipe.txt, author:req.body.user.id,comment:req.body.recipe.comments, like:false}).save()
    .then(async dataRecipe=>{res.status(201).json({title:dataRecipe.title})})
    .catch(error=>res.status(400).json(error))
}

exports.readRecipe = (req, res, next)=>{
    Recipe.findOne({title:req.body.recipe.title, author:req.body.user.id})
    .then(async dataRecipe=>{res.status(201).json(dataRecipe)})
    .catch(error=>res.status(400).json(error))
}

exports.editRecipe = (req, res, next)=>{
    Recipe.updateOne({title:req.body.recipe.title, author:req.body.user.id}, {...req.body.recipe})
    .then(()=>res.status(201).send("Recette modifiée"))
    .catch(error=>res.status(400).json(error))
}

exports.deleteRecipe = (req, res, next)=>{
    Recipe.deleteOne({title:req.body.recipe.title, author:req.body.user.id})
    .then(()=>res.status(201).send("Recette supprimée"))
    .catch(error=>res.status(400).json(error))
}

exports.allRecipes = (req, res, next)=>{
    // fonction map pour mettre que les élements qu'on veut dans un tableau
    Recipe.find({author:req.body.user.id})
    .then(async dataRecipe=>{res.status(201).json(dataRecipe)})
    .catch(error=>res.status(400).json(error))
}