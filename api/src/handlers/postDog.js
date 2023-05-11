const createNewDog = require('../controllers/dogRoutesControls/createNewDog');

const postDog = async (req, res) => {
   try {
      const { name, height, weight, life_span, image, temperaments } = req.body;

      const newDog = await createNewDog({name, height, weight, life_span, image, temperaments});

      return res.status(200).json(newDog);
   } catch (error) {
      return res.status(500).json({ message: error.message } );
      
   }
};

module.exports = postDog;