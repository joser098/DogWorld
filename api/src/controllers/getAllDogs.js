const { Dog } = require('../db');
const axios = require('axios');

const getAllDogs = async () => {
    const dbDogs = await Dog.findAll();
    const { data } = await axios('https://api.thedogapi.com/v1/breeds');

    const allDogs = [...dbDogs, data];
    return allDogs;
};


module.exports = getAllDogs;