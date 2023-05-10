const { Dog } = require('../../db');

const createNewDog = async ({ name, height, weight, life_span, image, temperaments }) => {
    if(!name || !height || !weight || !life_span || !image || !temperaments) throw Error('Faltan datos');
    
    const newDog = await Dog.create({
        name,
        height,
        weight,
        life_span,
        image
    });

    newDog.addTemperament(temperaments);
    return newDog;
};


module.exports = createNewDog;