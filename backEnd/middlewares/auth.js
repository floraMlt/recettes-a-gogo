const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
   
    try {
        const token = req.headers.authorization.split(" ")[1] // récupérér le token dans la requête
        const tokenDecode = jwt.verify(token, process.env.CLESECURITE) // vérifier le token et le retourne décodé
        if(req.body.user.id && tokenDecode.idUser == req.body.user.id){ next() } // utiliser token pour identifier la personne (comparaison)
        else {throw "Id invalide";}
    } catch (error) { // s'il y a des erreurs qui proviennent de try
        res.status(401).send("Erreur liée au token")
    }
}