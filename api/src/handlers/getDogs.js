const getAllOrByName = require('../controllers/dogRoutesControls/getAllOrByName');


const getDogs = async (req, res) =>{
   try {

      const { name } = req.query;
      if(name){
         const dogName = await getAllOrByName(name);
         // const dogImages = await  getDogsImages(name);
         return res.status(200).json(dogName);
      }

      const allDogs = await getAllOrByName();
      return res.status(200).json(allDogs);

   } catch (error) {
      return res.status(500).json({ message: error.message } );
   }
};

module.exports = getDogs;