const { User, Dog } = require('../../db');
// const axios = require('axios');
const addLike = async (userId, dogId) => {
    const userFound = await User.findByPk(userId);

    userFound.addDog(dogId);
    
    return userFound;
};

//     const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;

// // Primero comprobamos si es formato UUID para, caso contrario agregar a DB y poder relacionar 
//     if(!regex.test(dogId)){
//         const { data } = await axios(`https://api.thedogapi.com/v1/breeds/${dogId}`);

//         const addDog = Dog.create({
//             name: data?.name,
//             height: data?.height.metric,
//             weight: data?.weight.metric,
//             life_span: data?.life_span,
//             image: data?.reference_image_id
//         });

//         userFound.addDog(dogId);
//         return addDog;
//     }; 



module.exports = addLike;

