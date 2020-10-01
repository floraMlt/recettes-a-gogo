const express = require('express') // on récupère express
const routerUser = require('./routes/user')
const routerRecipe = require('./routes/recipe')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

// créer obj app
const app = express()

// connecter mongodb, connect retourne une promise (asynchrone) : deux méthodes associées then() et catch()
mongoose.connect('mongodb+srv://' + process.env.IDMONGODB + ':'+ process.env.MDPMONGODB +'@recettes.e88bl.mongodb.net/'+ process.env.NOMSERVERMONGODB +'?retryWrites=true&w=majority', 
{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{
    console.log("Connexion à MongoDB réussie")
})
.catch(()=>{
    console.log("Erreur de connexion spécifique à MongoDB")
})

// on met un truc dans app que l'application devra faire. un app.use = une étape dans la requete. On peut mettre une fonction, 
// next() -> logique de middleware
app.use((req, res, next)=>{
    console.log("Nouvelle requete")
    next()
})

// CORS //
app.use((req, res, next)=>{
    res.setHeader("Access-Control-Allow-Origin", "*") // adresses IP autorisées : toutes ici
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization") // champs autorisés dans les requêtes reçues
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS") // types de requêts type REST (GET, POST, PUT, DELETE) qu'on autorise
    next()
})
///////// Le mettre dans un middleware avec un export default et l'appeler dans app.js

app.use(bodyParser.json()) // pour transformer le string récupéré en objet

app.use("/api/user", routerUser) // rediriger vers le routerUser
app.use("/api/recipe", routerRecipe)

module.exports = app