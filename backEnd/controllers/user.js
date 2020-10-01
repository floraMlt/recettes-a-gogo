const bcrypt = require('bcrypt');
const User = require('../models/User');
const jwt = require('jsonwebtoken');


/*exports.signup = (req, res, next)=>{
    const user = new User({pseudo:req.body.user.pseudo, mdp:req.body.user.mdp}) // crée un nouveau user
    user.save() // met le user dans la BDD (promise : asynchrone)
    .then(()=>{
        res.status(201).send("Utilisateur ajouté") // 201 : Elément bien créé
    })
    .catch((error)=>{
        res.status(400).json(error) // 400 : Erreur. send envoie un string et json envoie un objet dans la réponse
    })
}*/

exports.signup = async (req, res, next)=>{
    // FAIRE VERIFS SUR MDP !! et rendre pseudo unique dans model
    const mdpHash = await bcrypt.hash(req.body.user.mdp, 10) // crypter mdp, requête asynchrone, await c'est pour dire d'attendre que cette étape soit faite
    new User({...req.body.user, mdp:mdpHash}).save() // les ... permettent de générer un obj avec les mêmes champs et mêmes valeurs que celui donné
    .then(dataUser=>res.status(201).json({idUser:dataUser._id, token:jwt.sign({idUser:dataUser._id},process.env.CLESECURITE,{expiresIn:"24h"})}))
    .catch(error=>res.status(400).json(error))
}

exports.login = (req, res, next)=>{
    User.findOne({pseudo:req.body.user.pseudo})
    .then(async dataUser=>{
        //res.status(201).json(dataUser)
        const valid = await bcrypt.compare(req.body.user.mdp, dataUser.mdp)
        if(valid == true){
            res.status(201).json({idUser:dataUser._id, token:jwt.sign({idUser:dataUser._id},process.env.CLESECURITE,{expiresIn:"24h"})}) // sign crée le token ({infosDansToken}, clé, {paramFonctionnementToken})
        } else {
            res.status(403).send("Mot de passe incorrect")
        }
    })
    .catch(error=>res.status(400).json(error))
}

exports.edit = (req, res, next)=>{
    User.updateOne({_id:req.body.user.id}, {...req.body.user})
    .then(()=>res.status(201).send("Utilisateur modifié"))
    .catch(error=>res.status(400).json(error))
}

exports.delete = (req, res, next)=>{
    User.deleteOne({_id:req.body.user.id})
    .then(()=>res.status(201).send("Utilisateur supprimé"))
    .catch(error=>res.status(400).json(error))
}

exports.autoAuth = (req, res, next)=>{
   // User.findOne({_id:req.body.idUser})
    // verifier que user existe en BDD
    res.status(201).json({idUser:req.body.idUser, token:jwt.sign({idUser:req.body.idUser},process.env.CLESECURITE,{expiresIn:"24h"})}) // sign crée le token ({infosDansToken}, clé, {paramFonctionnementToken})
}

// front ds mounted de App : regarder si cookie token, si oui requete au back qui regarde token. Ne peut pas use middleware auth. envoie infos id et token, essaie de faire atuhentification
// envoie token sur route qu'on crée, route recupere token en header
// decoder le token et on genere pas erreur, retourne code 200 si bon, même si token perime front end pas authentifie
// si token bon, on récupere l'id dans le token, recreer un nveau token pour actualiser date peremption. Renvoyer ces deux infos en front.
// front recupere nveau token et le met dans le cookie. Stocke id User où il faut. Redirige où il faut.