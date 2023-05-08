const userRoutes = require('express').Router();


userRoutes.get('/', (req, res) =>{
   return res.status(200).send('userRouter OK')
});









module.exports = userRoutes;