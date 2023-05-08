const dogsRouter = require('express').Router();
const getAllDogs = require('../../controllers/getAllDogs');

dogsRouter.get('/', async (req, res) =>{
   try {
      const allDogs = await getAllDogs();

      return res.status(200).json(allDogs);
   } catch (error) {
      return res.status(500).json({ message: error.message } );
   }
});










module.exports = dogsRouter;