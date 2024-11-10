const express = require('express');
const userController = require('../controllers/User.controller');

const userRouter = express.Router();

userRouter.post('/', userController.createOne);
userRouter.get('/', userController.getAll);
userRouter.get('/:userId', userController.getOne);
userRouter.put('/:userId', userController.updateOne);
userRouter.delete('/:userId', userController.deleteOne);

userRouter.post('/:userId/favorites/:dishId', userController.addToFavorites);
userRouter.delete('/:userId/favorites/:dishId', userController.removeFromFavorites);
userRouter.get('/:userId/favorites', userController.getFavoriteDishes);

module.exports = userRouter;
