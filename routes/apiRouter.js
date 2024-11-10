const apiRouter = require('express').Router()
const ingredientRouter = require('./ingredientRouter')
const dishRouter = require('./dishRouter')
const userRouter = require('./userRouter')

apiRouter.use('/ingredients', ingredientRouter)
apiRouter.use('/dishes', dishRouter)
apiRouter.use('/users', userRouter)

module.exports = apiRouter