// const { Dog } = require('../db');
const axios = require('axios');

const getAllDogs = async () => {
    const dogs = [];

    for(let i = 0; i < 8; i++){
        const randomId = Math.floor(Math.random() * 264);
        const { data } = await axios(`https://api.thedogapi.com/v1/breeds/${randomId}`)
        dogs.push(data);
    }
    
    return dogs;
};


module.exports = getAllDogs;