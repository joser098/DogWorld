const temperamentsRouter = require('express').Router();

temperamentsRouter.get('/', async (req, res) =>{
       try {
        const allTemperaments = await getAllTemperaments();
        return res.status(200).json(allTemperaments);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
})



module.exports = temperamentsRouter;