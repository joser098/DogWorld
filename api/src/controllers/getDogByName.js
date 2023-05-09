const axios = require('axios');
const { Dog } = require('../db');
const { Op } = require('sequelize');

//helper
const toUpperCase = require('../helper/toUpperCase');

const getDogByName = async (name) => {
    const nameCapitalied = toUpperCase(name);

     const dogFound = await Dog.findAll({
        where: { 
            name:{ [Op.like]: `%${nameCapitalied}%`
        }
    }
});

    if(dogFound.length === 0){
        const { data } = await axios(`https://api.thedogapi.com/v1/breeds/search?q=${nameCapitalied}`);

        if(Object.keys(data).length === 0) throw Error('this name does not exist');
        
        return data;
    };

    return dogFound;
}


module.exports = getDogByName;