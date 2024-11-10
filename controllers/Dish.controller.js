const {Dish} = require('../models')

module.exports.createOne = async (req, res, next) => {
    try{
        const { body } = req;
        console.log(body)
        const dish = await Dish.create(body)
        res.status(201).send({data: dish})
    }
    catch(err){
        next(err)
    }
}
module.exports.getAll = async (req, res, next) => {
    try{
        const Dishes = await Dish.find({}).populate('ingredients');
        res.status(200).send({data: Dishes})
    }
    catch(err){
        next(err)
    }
}
module.exports.getOne = async (req, res, next) => {
    try{
        const {params: {dishId}} = req;
        const oneDish = await Dish.findById(dishId).populate('ingredients');
        res.status(200).send({data: oneDish})
    }
    catch(err){
        next(err)
    }
}
module.exports.updateOne = async (req, res, next) => {
    try{
        const {params: {dishId}, body} = req;
        console.log(body)
        const updated = await Dish.findByIdAndUpdate(dishId, body);
        console.log('first')
        res.status(200).send({data: updated})
    }
    catch(err){
        next(err)
    }   
}
module.exports.deleteOne = async (req, res, next) => {
    try{
    const {params: {dishId}} = req;
    const deleted = await Dish.findByIdAndDelete(dishId);
    res.status(200).send({data: deleted})
    }
    catch(err){
        next(err)
    }   
}

module.exports.getByIngredients = async (req, res, next) => {
    try {
        const { ingredientIds } = req.query;
        const idsArray = Array.isArray(ingredientIds) ? ingredientIds : [ingredientIds];
        const dishes = await Dish.find({ ingredients: { $all: idsArray } }).populate('ingredients');
        res.status(200).send({ data: dishes });
    } catch (err) {
        next(err);
    }
};



