const dogsRouter = require('express').Router();
const getAllDogs = require('../../controllers/getAllDogs');
const getDogById = require('../../controllers/getDogById');


dogsRouter.get('/', async (req, res) =>{
   try {
      const allDogs = await getAllDogs();

      return res.status(200).json(allDogs);
   } catch (error) {
      return res.status(500).json({ message: error.message } );
   }
});

dogsRouter.get('/:id', async (req, res) => {
   try {
      const { id } = req.params;
      const dogFound = await getDogById(id);

      return res.status(200).json(dogFound)
   } catch (error) {
      return res.status(500).json({ message: error.message } );
   }
});




module.exports = dogsRouter;