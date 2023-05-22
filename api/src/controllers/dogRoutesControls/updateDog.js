const { Dog } = require('../../db');

const updateDog = async (id, name, height, weight, life_span, image) => {
    if (!id) throw Error('Need Id to uptdate');

    const dogToUpdate = await Dog.findByPk(id);

    if (dogToUpdate === null) throw Error('Id not Found');
    
    dogToUpdate.name = name || dogToUpdate.name;
    dogToUpdate.height = height.length < 4 ? dogToUpdate.height : height;
    dogToUpdate.weight = weight.length < 4 ? dogToUpdate.weight : weight ;
    dogToUpdate.life_span = life_span.length < 10 ? dogToUpdate.life_span : life_span;
    dogToUpdate.image = image || dogToUpdate.image

    await dogToUpdate?.save();

    return { message: 'Data updated' };
};

module.exports = updateDog;