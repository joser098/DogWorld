const updateData = require('../controllers/userRoutesControllers/updateData');

const putUser = async (req, res) => {
   try {
      console.log(req.body)
      const { userId, name, email, password } = req.body;

      const updateUser = await updateData(userId, name, email, password);

      return res.status(200).json(updateUser)
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

module.exports = putUser;