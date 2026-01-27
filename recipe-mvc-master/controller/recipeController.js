// import the model
const Recipe = require("../models/recipeModels");

exports.createRecipe = async(req, res) => {
    try {
        const newRecipe = new Recipe(req.body);
        await newRecipe.save();
        res.status(201).json(newRecipe)

    } catch(error){
        res.status(400).json({
            message: "Not created"
        })
    }
}

exports.insertManyRecipes = async(req, res) => {
    try {
        const newRecipe = req.body;
        const insertedRecipes = await Recipe.insertMany(newRecipe)
        res.status(201).json(insertedRecipes)

    } catch(error){
        res.status(400).json({
            message: "Not created"
        })
    }
}

exports.getAllRecipes = async(req, res) =>{
    try {
        const recipe = await Recipe.find();
        res.status(200).json(recipe)
    } catch(error){
        res.status(400).json({
            message: "failed to get the data "
        }) 
    }
}


exports.getRecipeById = async(req, res) =>{
    try {
        const recipe = await Recipe.findById();
        res.status(200).json(recipe)
    } catch(error){
        res.status(400).json({
            message: "failed to get the data "
        }) 
    }
}


exports.updateRecipe = async(req, res) =>{
    try {
        const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(recipe)
    } catch(error){
        res.status(400).json({
            message: "failed to update the data "
        }) 
    }
}


exports.deleteRecipe = async(req, res) =>{
    try {
        const recipe = await Recipe.findByIdAndDelete(req.params.id);
        res.status(200).json(recipe)
    } catch(error){
        res.status(400).json({
            message: "failed to delete the data "
        }) 
    }
}


