const express =  require('express')
const router = express.Router() // récupère le router d'express
const controllerUser = require('../controllers/user')
const auth = require('../middlewares/auth')
const autoAuth = require('../middlewares/autoAuth')

// router fait passerelle entre application et controller
router.post("/", controllerUser.signup)
router.post("/auth", controllerUser.login)
router.put("/", auth, controllerUser.edit) // lance middleware auth, puis controllerUser.edit
router.delete("/", auth, controllerUser.delete)
router.post("/autoAuth", autoAuth, controllerUser.autoAuth)

module.exports = router