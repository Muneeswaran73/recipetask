
const express = require("express");

const router = express.Router();

const recipeController = require("../controller/recipeController");


router.post("/", recipeController.createRecipe);

router.post("/more", recipeController.insertManyRecipes);

router.get("/", recipeController.getAllRecipes);

router.get("/:id", recipeController.getRecipeById);

router.put("/:id", recipeController.updateRecipe);

router.delete("/:id", recipeController.deleteRecipe)




module.exports = router;