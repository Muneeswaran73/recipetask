
const mongoose = require("mongoose");

// define the schema for the recipe
const recipeSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String, 
        required: true
    },
    tags: {
        type: [String]
    },
    createdAt: {
        type: Date, 
        default: Date.now
    }
})

const Recipe = mongoose.model("Recipe", recipeSchema);

// exports the model
module.exports = Recipe