const mongoose = require('mongoose')
const Ingredient = require('./Ingredient')
const Dish = require('./Dish')
const User = require('./User')
const config = require('../configs/mConfig.json')

const CONFIG = config[process.env.NODE_ENV || "development"]

const url = `mongodb://${CONFIG.host}:${CONFIG.port}/${CONFIG.database}`
mongoose.connect(url)
.catch((err) =>{
    console.log(`Failed: ${err}`)
    process.exit(1);
})


module.exports = {
    Ingredient,
    Dish,
    User,
}