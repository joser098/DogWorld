const temperamentsRouter = require('express').Router();

temperamentsRouter.get('/', (req, res) =>{
    return res.status(200).send('temperamentsRouter OK')
})










module.exports = temperamentsRouter;