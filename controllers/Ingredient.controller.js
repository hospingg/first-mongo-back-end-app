const {Ingredient} = require('../models')

module.exports.createOne = async (req, res, next) => {
    try{
        const { body } = req;
        console.log(body)
        const ingredient = await Ingredient.create(body)
        res.status(201).send({data: ingredient})
    }
    catch(err){
        next(err)
    }
}
module.exports.getAll = async (req, res, next) => {
    try{
        const Ingredients = await Ingredient.find();
        res.status(200).send({data: Ingredients})
    }
    catch(err){
        next(err)
    }
}
module.exports.getOne = async (req, res, next) => {
    try{
        const {params: {ingredientId}} = req;
        const oneIngredient = await Ingredient.findById(ingredientId);
        res.status(200).send({data: oneIngredient})
    }
    catch(err){
        next(err)
    }
}
module.exports.updateOne = async (req, res, next) => {
    try{
        const {params: {ingredientId}, body} = req;
        const updated = await Ingredient.findByIdAndUpdate(ingredientId, body);
        res.status(200).send({data: updated})
    }
    catch(err){
        next(err)
    }   
}
module.exports.deleteOne = async (req, res, next) => {
    try{
    const {params: {ingredientId}} = req;
    const deleted = await Ingredient.findByIdAndDelete(ingredientId);
    res.status(200).send({data: deleted})
    }
    catch(err){
        next(err)
    }   
}