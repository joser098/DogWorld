const { User, Dog } = require('../../db');
const axios = require('axios');

const addLike = async (userId, dogId) => {
     const regex = /([a-zA-Z]+([0-9]+[a-zA-Z]+)+)/;

     const userFound = await User.findByPk(userId);
    
     if(regex.test(dogId)){
         userFound.addDog(dogId);
         return `Like added successfyly`;
        }; 
        
        const { data } = await axios(`https://api.thedogapi.com/v1/breeds/${dogId}`);
        const addDog = await Dog.create({
             name: data?.name,
             height: data?.height.metric,
             weight: data?.weight.metric,
             life_span: data?.life_span,
             image: data?.reference_image_id,
             apiId: data?.id
            });


    
        const newDog = await Dog.findOne({ where: { apiId: dogId}});
        userFound.addDog(newDog.id);

        return `Like added successfyly`;
};


module.exports = addLike;

