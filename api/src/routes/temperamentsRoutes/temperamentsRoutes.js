const temperamentsRouter = require('express').Router();
const temperamentToDb = require('../../controllers/temperamentsControls/temperamentToDb');

temperamentsRouter.get('/', async (req, res) =>{
    try {
        const allTemperaments = await temperamentToDb();
        return res.status(200).json(allTemperaments);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
});



module.exports = temperamentsRouter;