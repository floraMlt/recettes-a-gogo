const express =  require('express')
const router = express.Router() // récupère le router d'express
const controllerRecipe = require('../controllers/recipe')
const auth = require('../middlewares/auth')

// router fait passerelle entre application et controller
router.post("/all", auth, controllerRecipe.allRecipes)
router.post("/read", auth, controllerRecipe.readRecipe)
router.post("/", auth, controllerRecipe.newRecipe)
router.put("/", auth, controllerRecipe.editRecipe)
router.delete("/", auth, controllerRecipe.deleteRecipe)

module.exports = router