const dogsRouter = require('express').Router();
const getDogs = require('../../handlers/getDogs');
const getDogWithId = require('../../handlers/getDogWithId');
const postDog = require('../../handlers/postDog');


dogsRouter.get('/', getDogs);

dogsRouter.get('/:id', getDogWithId);

dogsRouter.post('/', postDog);



module.exports = dogsRouter;