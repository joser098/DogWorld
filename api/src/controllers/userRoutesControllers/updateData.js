const { User } = require('../../db');

const updateData = async (userId, name, email, password) => {
    if(!userId) throw Error('Need Id to uptdate');

    const userToUpdate = await User.findByPk(userId);

    if(userToUpdate === null) throw Error('Id not Found');

    userToUpdate?.set({
        name: name || userToUpdate.name,
        email: email || userToUpdate.email,
        password: password || userToUpdate.password
    });

    await userToUpdate?.save();

    return { message: 'Data updated'};
};

module.exports = updateData;