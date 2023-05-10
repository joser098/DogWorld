const axios = require('axios');
const addTempsToArray = require('../../helper/addTempsToArray');

const getAllTemperaments = async () => {
    const  { data }  = await axios(`https://api.thedogapi.com/v1/breeds`);
    let allTemps = [];

     data.forEach(async (dog) => {
        let dogTemps = dog.temperament;
        let array = addTempsToArray(dogTemps);

        array.forEach((temp) => {
            if(!allTemps.includes(temp)){
                allTemps.push(temp)
            }
        })
    })
    
    return allTemps;
}

module.exports = getAllTemperaments;