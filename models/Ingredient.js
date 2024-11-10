const mongoose = require('mongoose');


const ingredientSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        description: "ingredient's name must be string and is required"
    },
    type: {
        type: String,
        required: true,
        enum: ['vegetable', 'fruit', 'berry', 'spice', 'liquid', 'egg', 'flour'],
        description: "type must be one of the specified values"
    },
    description: {
        type: String,
        trim: true,
        description: "ingredient's description must be string"
    }
});

const Ingredient = mongoose.model('Ingredient', ingredientSchema)

module.exports = Ingredient