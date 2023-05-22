const { Dog, Temperament } = require('../../db');
const axios = require('axios');

const getDogById = async (id) => {
    const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;

    // Primero comprobamos si es formato UUID para buscar en DB 
    if (regex.test(id)) {
        const dogFound = await Dog.findByPk(id, { include: Temperament });
        if (!dogFound) throw Error('this Id does not exist in DB');

        const dogToShow = {
            id: dogFound.id,
            image: {
                url: dogFound.image
            },
            name: dogFound.name,
            height: {
                metric: dogFound.height
            },
            weight: {
                metric: dogFound.weight
            },
            temperament: `${dogFound.Temperaments.map(temperament => temperament.name)}`,
            life_span: dogFound.life_span
        };

        return dogToShow;
    };

    // Caso contrario buscamos en api
    const { data } = await axios(`https://api.thedogapi.com/v1/breeds/${id}`);

    const img = await axios(`https://api.thedogapi.com/v1/images/${data.reference_image_id}`);

    if (Object.keys(data).length === 0) throw Error('this Id does not exist in api')

    return [data, img.data];
};

module.exports = getDogById;