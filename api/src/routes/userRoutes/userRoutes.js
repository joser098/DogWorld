const userRoutes = require('express').Router();
const postUser = require('../../handlers/postUser');
const putUser = require('../../handlers/putUser');
const postLike = require('../../handlers/postLike');
const deleteLike = require('../../handlers/deleteLike');
const getUserLogin = require('../../handlers/getUserLogin');


userRoutes.post('/', postUser);

userRoutes.get('/', getUserLogin);

userRoutes.put('/', putUser);

userRoutes.post('/like', postLike);

userRoutes.delete('/like', deleteLike); 


module.exports = userRoutes;