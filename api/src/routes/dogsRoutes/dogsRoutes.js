const dogsRouter = require('express').Router();
const getAllDogs = require('../../controllers/dogRoutesControls/getAllDogs');
const getDogById = require('../../controllers/dogRoutesControls/getDogById');
const createNewDog = require('../../controllers/dogRoutesControls/createNewDog');
const getDogByName = require('../../controllers/dogRoutesControls/getDogByName');


dogsRouter.get('/', async (req, res) =>{
   try {

      const { name } = req.query;
      if(name){
         const dogName = await getDogByName(name);
         return res.status(200).json(dogName);
      }

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

dogsRouter.post('/', async (req, res) => {
   try {
      const { name, height, weight, life_span, image, temperaments } = req.body;

      const newDog = await createNewDog({name, height, weight, life_span, image, temperaments});

      return res.status(200).json(newDog);
   } catch (error) {
      return res.status(500).json({ message: error.message } );
      
   }
});






module.exports = dogsRouter;