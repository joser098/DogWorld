const axios = require('axios')
const  getAllTemperaments = async () => {
    const  { data }  = await axios(`https://api.thedogapi.com/v1/breeds`);

    let allTemps = [];
    
    data.map(async (dog) => {
        let dogTemps = dog.temperament;
        let array = dogTemps?.split(', ');

        array?.map((temp) => {
            if(!allTemps.includes(temp)){
                allTemps.push(temp)
            }
        })
    })
    
    return allTemps;
};

module.exports = getAllTemperaments;