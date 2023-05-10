const userRoutes = require('express').Router();
const createUser = require('../../controllers/userRoutesControllers/createUser');
const updateData = require('../../controllers/userRoutesControllers/updateData');

userRoutes.post('/', async (req, res) =>{
   try {
      const { name, email, password } = req.body;
      
      const newUser =  await createUser(name, email, password);

      return res.status(200).send(newUser);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
});

userRoutes.put('/', async (req, res) => {
   try {
      console.log(req.body)
      const { userId, name, email, password } = req.body;

      const updateUser = await updateData(userId, name, email, password);

      return res.status(200).json(updateUser)
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
});









module.exports = userRoutes;