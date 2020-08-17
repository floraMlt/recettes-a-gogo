const express = require('express') // on récupère express

// créer obj app
const app = express()

// on met un truc dans app que l'application devra faire. un app.use = une étape dans la requete. On peut mettre une fonction, 
app.use((req, res, next)=>{
    console.log("Nouvelle requete")
    next()
})

app.use("/bidule",(req, res, next)=>{
    res.statusCode = 200
    res.send("Bienvenue sur bidule")
    next()
})

app.use("/toto",(req, res, next)=>{
    res.statusCode = 200
    res.send("Bienvenue sur toto")
})

module.exports = app