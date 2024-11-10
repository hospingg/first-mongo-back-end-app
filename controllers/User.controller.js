const User = require('../models/User');
const Dish = require('../models/Dish');

module.exports.createOne = async (req, res, next) => {
    try {
        const { body } = req;
        const user = await User.create(body);
        res.status(201).send({ data: user });
    } catch (err) {
        next(err);
    }
};

module.exports.getAll = async (req, res, next) => {
    try {
        const users = await User.find({}).populate({
            path: 'favorites',
            select: '-ingredients'
        });
        res.status(200).send({ data: users });
    } catch (err) {
        next(err);
    }
};



module.exports.getOne = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate({
            path: 'favorites',
            select: '-ingredients'
        });
        res.status(200).send({ data: user });
    } catch (err) {
        next(err);
    }
};


module.exports.updateOne = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const { body } = req;
        const updatedUser = await User.findByIdAndUpdate(userId, body, { new: true }).populate({
            path: 'favorites',
            select: '-ingredients'
        });
        res.status(200).send({ data: updatedUser });
    } catch (err) {
        next(err);
    }
};

module.exports.deleteOne = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const deletedUser = await User.findByIdAndDelete(userId);
        res.status(200).send({ data: deletedUser });
    } catch (err) {
        next(err);
    }
};

module.exports.addToFavorites = async (req, res, next) => {
    try {
        const { userId, dishId } = req.params;
        const user = await User.findById(userId);
        if (!user.favorites.includes(dishId)) { 
            user.favorites.push(dishId);
            await user.save();
        }
        res.status(200).send({ data: user });
    } catch (err) {
        next(err);
    }
};


module.exports.removeFromFavorites = async (req, res, next) => {
    try {
        const { userId, dishId } = req.params;
        const user = await User.findById(userId);
        user.favorites = user.favorites.filter(dish => dish.toString() !== dishId);
        await user.save();
        res.status(200).send({ data: user });
    } catch (err) {
        next(err);
    }
};


module.exports.getFavoriteDishes = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await User.findById(userId).populate({
            path: 'favorites',
            select: '-ingredients'
        });
        res.status(200).send({ data: user.favorites });
    } catch (err) {
        next(err);
    }
};
