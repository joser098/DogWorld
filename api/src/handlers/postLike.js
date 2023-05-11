const addLike = require('../controllers/userRoutesControllers/addLike');

const postLike = async (req, res) => {
   const { userId, dogId } = req.body;

   const postLike = await addLike(userId, dogId);

   return res.status(200).send(postLike);
};

module.exports = postLike;