const userRoutes = require('express').Router();
const postUser = require('../../handlers/postUser');
const postLike = require('../../handlers/postLike');
const getUserLogin = require('../../handlers/getUserLogin');


userRoutes.post('/', postUser);

userRoutes.get('/', getUserLogin);

userRoutes.post('/like', postLike);


module.exports = userRoutes;