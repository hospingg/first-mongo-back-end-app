const ingredientRouter = require('express').Router()
const ingredientController = require('../controllers/Ingredient.controller')

ingredientRouter.post('/', ingredientController.createOne)
ingredientRouter.get('/', ingredientController.getAll)
ingredientRouter.get('/:ingredientId', ingredientController.getOne)
ingredientRouter.put('/:ingredientId', ingredientController.updateOne)
ingredientRouter.delete('/:ingredientId', ingredientController.deleteOne)

module.exports = ingredientRouter