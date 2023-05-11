const createUser = require('../controllers/userRoutesControllers/createUser');

const postUser =  async (req, res) =>{
   try {
      const { name, email, password } = req.body;
      
      const newUser =  await createUser(name, email, password);

      return res.status(200).send(newUser);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
}

module.exports = postUser;