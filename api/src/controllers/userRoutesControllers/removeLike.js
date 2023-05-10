const { User, Dog } = require('../../db');

const removeLike = async (userId, dogId) => {
    const userFound = await User.findByPk(userId);

    userFound.removeDog(dogId);
    
    return userFound;
};

module.exports = removeLike;