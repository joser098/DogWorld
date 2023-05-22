const { Dog } = require('../../db');

const removeDog = async (id) => {
    const dogFound = await Dog.findByPk(id);

    if (!dogFound) { throw Error(`There is not dog with id: ${id}`) }

    await dogFound.destroy();

    return dogFound;
};

module.exports = removeDog;