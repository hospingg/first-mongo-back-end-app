const mongoose = require('mongoose');


const DishSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true,
        description: "Dish's name must be string and is required"
    },
    ingredients: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Ingredient',
        required: true,
        description: "Each ingredient must be a reference to an Ingredient document"
    }],
    description: {
        type: String,
        trim: true,
        description: "Dish's description must be string"
    }
});

const Dish = mongoose.model('Dish', DishSchema)

module.exports = Dish