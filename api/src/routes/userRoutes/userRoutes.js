const userRoutes = require('express').Router();
const postUser = require('../../handlers/postUser');
const putUser = require('../../handlers/putDogs');
const postLike = require('../../handlers/postLike');
const deleteLike = require('../../handlers/deleteDog');
const getUserLogin = require('../../handlers/getUserLogin');


userRoutes.post('/', postUser);

userRoutes.get('/', getUserLogin);

userRoutes.post('/like', postLike);


module.exports = userRoutes;