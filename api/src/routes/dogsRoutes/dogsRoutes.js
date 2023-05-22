const dogsRouter = require('express').Router();
const getDogs = require('../../handlers/getDogs');
const getDogWithId = require('../../handlers/getDogWithId');
const postDog = require('../../handlers/postDog');
const putDogs = require('../../handlers/putDogs');
const deleteDog = require('../../handlers/deleteDog')


dogsRouter.get('/', getDogs);

dogsRouter.get('/:id', getDogWithId);

dogsRouter.post('/', postDog);

dogsRouter.put('/:id', putDogs);

dogsRouter.delete('/:id', deleteDog); 



module.exports = dogsRouter;