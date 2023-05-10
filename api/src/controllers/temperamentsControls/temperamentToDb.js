const axios = require('axios');
const { Temperament } = require('../../db');
const getAllTemperaments = require('../../helper/getAllTemperaments');

const temperamentToDb = async () => {
    try {
        const allTemperaments = await getAllTemperaments();
    
        allTemperaments.map(async (name) => {
            await Temperament.create({ name })
        })
    
        return `All temperaments are saved in DB`;
    } catch (error) {
       return {message: error.message}; 
    }
};

module.exports = temperamentToDb;