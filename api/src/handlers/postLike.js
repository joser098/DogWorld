const addLike = require('../controllers/userRoutesControllers/addLike');

const postLike = async (req, res) => {
   try {
      const { userId, dogId } = req.body;
   
      const postLike = await addLike(userId, dogId);
   
      return res.status(200).json({message: postLike});
      
   } catch (error) {
      return res.status(500).json({ message: error.message })
   }
};

module.exports = postLike;