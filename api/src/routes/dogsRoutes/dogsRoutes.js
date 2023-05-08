const dogsRouter = require('express').Router();

dogsRouter.get('/', (req, res) =>{
   return res.status(200).send('dogsRouter OK')
})










module.exports = dogsRouter;