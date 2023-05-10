const { Dog } = require('../../db');

const createNewDog = async ({ name, height, weight, life_span, image }) => {
    if(!name || !height || !weight || !life_span || !image) throw Error('Faltan datos');
    
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