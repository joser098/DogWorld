const getDogById = require('../controllers/dogRoutesControls/getDogById');

const getDogWithId = async (req, res) => {
   try {
      const { id } = req.params;
      const dogFound = await getDogById(id);

      return res.status(200).json(dogFound)
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

module.exports = getDogWithId;