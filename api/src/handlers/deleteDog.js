const removeDog = require('../controllers/dogRoutesControls/removeDog');

const deleteDog = async (req, res) => {
   try {
      const { id } = req.params;
      const deleteDog = await removeDog(id);
   
      return res.status(200).json({ message: 'Deleted successfuly'});
   } catch (error) {
      return res.status(500).json({ message: error.message })
   }
};


module.exports = deleteDog;