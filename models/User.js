const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true, 
        validate: {
            validator: function (value) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
            },
            message: 'Invalid email address format',
          },
    },
    password: {
        type: String,
        required: true,
    },
    favorites: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Dish',
    }],
});

const User = mongoose.model('User', userSchema)

module.exports = User