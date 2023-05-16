const { Dog, Temperament } = require('../../db');
const { Op } = require('sequelize');
const axios = require('axios');

const getAllOrByName = async (name) => {
    
    if(!name){
        const dogsFound = await Dog.findAll({ include: Temperament });

        const dogsFoundInDB = []; 
        
        dogsFound?.map(dog => {
            const dogToAdd ={
                id: dog.id,
                image: {
                    url: dog.image
                },
                name: dog.name,
                weight: {
                    metric: dog.weight
                },
                temperament: `${dog.Temperaments.map(temperament => temperament.name)}`
            }
            dogsFoundInDB.push(dogToAdd);
        });
        

        const { data } = await axios(`https://api.thedogapi.com/v1/breeds`);

        if(dogsFoundInDB.length === 0 && data.length !== 0) return data;
        if(dogsFoundInDB.length !== 0 && data.length === 0) return dogsFoundInDB;
        if(dogsFoundInDB.length !== 0 && data.length !== 0) return dogsFoundInDB.concat(data);
        throw Error('There is not dogs');
    };
    
    dogsFoundInDB = await Dog.findAll({
        where: {
            name:{ [Op.like]: `%${name}%`
        }
    }});

    const { data } = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${name}`);

    if(dogsFoundInDB.length === 0 && data.length !== 0) return data;
    if(dogsFoundInDB.length !== 0 && data.length === 0) return dogsFoundInDB;
    if(dogsFoundInDB.length !== 0 && data.length !== 0) return dogsFoundInDB.concat(data);

    return `There is not dogs with ${name}`;
};

module.exports = getAllOrByName;