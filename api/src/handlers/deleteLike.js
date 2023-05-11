const removeLike = require('../controllers/userRoutesControllers/removeLike');

const deleteLike = async (req, res) => {
   const { userId, dogId } = req.body;

   const deleteLike = await removeLike(userId, dogId);

   return res.status(200).send(deleteLike);
};


module.exports = deleteLike;