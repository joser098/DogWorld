const removeLike = require('../controllers/userRoutesControllers/removeLike');

const deleteLike = async (req, res) => {
   try {
      const { userId, dogId } = req.body;
   
      const deleteLike = await removeLike(userId, dogId);
   
      return res.status(200).json({ message: 'Deleted successfuly'});
   } catch (error) {
      return res.status(500).json({ message: error.message })
   }
};


module.exports = deleteLike;