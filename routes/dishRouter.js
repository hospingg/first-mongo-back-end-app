const dishRouter = require('express').Router()
const dishController = require('../controllers/Dish.controller')

dishRouter.get('/by-ingredients', dishController.getByIngredients);

dishRouter.post('/', dishController.createOne);
dishRouter.get('/', dishController.getAll);
dishRouter.get('/:dishId', dishController.getOne);
dishRouter.put('/:dishId', dishController.updateOne);
dishRouter.delete('/:dishId', dishController.deleteOne);

module.exports = dishRouter;