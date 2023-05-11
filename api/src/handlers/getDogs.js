const getAllDogs = require('../controllers/dogRoutesControls/getAllDogs');
const getDogByName = require('../controllers/dogRoutesControls/getDogByName');

const getDogs = async (req, res) =>{
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
};

module.exports = getDogs;