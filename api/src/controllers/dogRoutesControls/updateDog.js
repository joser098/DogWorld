const { Dog } = require('../../db');

const updateDog = async (id, name, height, weight, life_span) => {
    if(!id) throw Error('Need Id to uptdate');

    const dogToUpdate = await Dog.findByPk(id);

    if(dogToUpdate === null) throw Error('Id not Found');

    dogToUpdate?.set({
        name: name || dogToUpdate.name,
        height: height || dogToUpdate.height,
        weight: weight || dogToUpdate.weight,
        life_span: life_span || dogToUpdate.life_span
    });

    await dogToUpdate?.save();

    return { message: 'Data updated'};
};

module.exports = updateDog;