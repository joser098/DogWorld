const userRoutes = require('express').Router();
const postUser = require('../../handlers/postUser');
const putUser = require('../../handlers/putUser');
const postLike = require('../../handlers/postLike');
const deleteLike = require('../../handlers/deleteLike');


userRoutes.post('/', postUser);

userRoutes.put('/', putUser);

userRoutes.post('/like', postLike);

userRoutes.delete('/like', deleteLike); 


module.exports = userRoutes;