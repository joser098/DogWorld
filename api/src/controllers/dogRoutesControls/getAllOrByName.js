const { Dog } = require('../../db');
const { Op } = require('sequelize');
const axios = require('axios');

const getAllOrByName = async (name) => {
    
    if(!name){
        const dogsFoundInDB = await Dog.findAll();
        const { data } = await axios(`https://api.thedogapi.com/v1/breeds`);
        
        if(dogsFoundInDB.length === 0 && data.length !== 0) return data;
        if(dogsFoundInDB.length !== 0 && data.length === 0) return dogsFoundInDB;
        if(dogsFoundInDB.length !== 0 && data.length !== 0) return [...dogsFoundInDB, data];
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
    if(dogsFoundInDB.length !== 0 && data.length !== 0) return [...dogsFoundInDB, data];

    return `There is not dogs with ${name}`;
};

module.exports = getAllOrByName;