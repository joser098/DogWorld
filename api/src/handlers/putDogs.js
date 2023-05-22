const updateData = require('../controllers/dogRoutesControls/updateDog');

const putDogs = async (req, res) => {
   try {
      const { id, name, height, weight, life_span } = req.body;
     
      const updateDog = await updateData(id, name, height, weight, life_span);

      return res.status(200).json(updateDog)
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

module.exports = putDogs;