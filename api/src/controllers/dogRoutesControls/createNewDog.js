const { Dog } = require('../../db');

const createNewDog = async ({ name, height, weight, life_span, image }) => {
    const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image
    });

    return newDog;
};


module.exports = createNewDog;