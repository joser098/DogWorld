const { Dog, Temperament } = require('../../db');
const { Op } = require('sequelize');
const axios = require('axios');
const toUpperCase = require('../../helper/toUpperCase');


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

    const nameCapitalized = toUpperCase(name);
    
    dogsFound = await Dog.findAll({
        where: {
            name:{ [Op.like]: `%${nameCapitalized}%`
        }},
        include: Temperament
    });

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

    

    const { data } = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${nameCapitalized}`);

    const dogsFoundinApi = []

    for(const dog of data){
        let { data } = await axios(`https://api.thedogapi.com/v1/images/${dog.reference_image_id}`);

        const newDog = {
            id: data.breeds[0].id,
            image: {
                url: data.url  
            },
            name: data.breeds[0].name,
            weight: data.breeds[0].weight,
            temperament: data.breeds[0].temperament
        };

        dogsFoundinApi.push(newDog)
    };

    if(dogsFoundInDB.length === 0 && data.length !== 0) return dogsFoundinApi;
    if(dogsFoundInDB.length !== 0 && data.length === 0) return dogsFoundInDB;
    if(dogsFoundInDB.length !== 0 && data.length !== 0) return dogsFoundInDB.concat(dogsFoundinApi);

    return `There is not dogs with ${name}`;
};

module.exports = getAllOrByName;