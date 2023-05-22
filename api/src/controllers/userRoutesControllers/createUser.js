const { User } = require('../../db');

const createUser = async (name, email, password) => {
    if (!name || !email || !password) throw Error('Faltan datos');

    const newUser = await User.create({
        name,
        email,
        password
    })

    return newUser;
};


module.exports = createUser;