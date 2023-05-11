const temperamentsRouter = require('express').Router();
const getTemperaments = require('../../handlers/getTemperaments');

temperamentsRouter.get('/', getTemperaments);


module.exports = temperamentsRouter;