const axios = require('axios');
const { Dog } = require('../../db');
const { Op } = require('sequelize');

//helper
const toUpperCase = require('../../helper/toUpperCase');

const getDogByName = async (name) => {
    // Primero formateamos el input al formato en el que los datos estan guardados para matchear mejor
    const nameCapitalied = toUpperCase(name);

    //Bucasmos primero en DB todos los Dogs que matcheen con el input recibido.
     const dogsFoundInDB = await Dog.findAll({
        where: { 
            name:{ [Op.like]: `%${nameCapitalied}%`
        }
    }});

    // Luego buscamos en api todos los Dogs que matcheen con el input recibido.
     const { data }  = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${nameCapitalied}`);

    // Dependiendo de lo obtenido de cada una daremos una respuesta respuesta adecuada. 
    if(dogsFoundInDB.length === 0 && data.length !== 0) return data;
    if(dogsFoundInDB.length !== 0 && data.length === 0) return dogsFoundInDB;
    if(dogsFoundInDB.length !== 0 && data.length !== 0) return [...dogsFoundInDB, ...data];

    return `This name does not exits`;
}


module.exports = getDogByName;