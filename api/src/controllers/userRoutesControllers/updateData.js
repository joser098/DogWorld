const { User } = require('../../db');

const updateData = async (userId, name, email, password) => {
    const userToUpdate = await User.findByPk(userId);
    

    userToUpdate?.set({
        name: name || userToUpdate.name,
        email: email || userToUpdate.email,
        password: password || userToUpdate.password
    });

    await userToUpdate?.save();

    return { message: 'Data updated'};
};

module.exports = updateData;