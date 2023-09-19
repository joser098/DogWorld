// const { Dog, Temperament } = require("../../db");
// const { Op } = require("sequelize"); 
const axios = require("axios");
// const toUpperCase = require("../../helper/toUpperCase");

const getAllOrByName = async (name) => {
  //comprobar si se obtuvo un nombre para buscar
  if (!name) {
    // const dogsFound = await Dog.findAll({ include: Temperament }); //obtener todos los dogs de DB

    // const dogsFoundInDB = [];

    // dogsFound?.map((dog) => {
    //   // Crear el formato correcto para el cliente
    //   const dogToAdd = {
    //     id: dog.id,
    //     image: {
    //       url: dog.image,
    //     },
    //     name: dog.name,
    //     weight: {
    //       metric: dog.weight,
    //     },
    //     temperament: `${dog.Temperaments.map(
    //       (temperament) => ` ${temperament.name}`
    //     )}`, //Obtener temperamentos de la tabla intermedia
    //   };
    //   dogsFoundInDB.push(dogToAdd);
    // });

    const { data } = await axios(`https://api.thedogapi.com/v1/breeds?limit=20`); //obtenemos todos los dogs de la Api

    const dogsFoundinApi = [];

    for (const dog of data) {
      // Iteramos los dogs para buscar su imagen con Id de referencia
      if (dog.hasOwnProperty("reference_image_id")) {
        // Comprobar que los perritos tengas id de referencia
        let { data } = await axios(
          `https://api.thedogapi.com/v1/images/${dog?.reference_image_id}`
        );

        const newDog = {
          id: data?.breeds[0].id,
          image: {
            url: data?.url,
          },
          name: data?.breeds[0].name,
          weight: data?.breeds[0].weight,
          temperament: data?.breeds[0]?.temperament,
        };

        dogsFoundinApi.push(newDog);
      }
    }

    //Retornamos de acuerdo a lo obtenido
    // if (dogsFoundInDB.length === 0 && data.length !== 0) return dogsFoundinApi;
    // if (dogsFoundInDB.length !== 0 && data.length === 0) return dogsFoundInDB;
    // if (dogsFoundInDB.length !== 0 && data.length !== 0)
    //   return dogsFoundInDB.concat(data);
    // throw Error("There is not dogs");

    if (dogsFoundinApi.length !== 0) return dogsFoundinApi;
    throw Error("There is not dogs");
  }

  ///////// SI SE OBTIENE NOMBRE /////////
//   const nameCapitalized = toUpperCase(name); //Capitalizamos la primera letra del nombre para matcherar todos

//   dogsFound = await Dog.findAll({
//     where: {
//       name: {
//         [Op.like]: `%${nameCapitalized}%`,
//       },
//     },
//     include: Temperament,
//   });

//   const dogsFoundInDB = [];

//   dogsFound?.map((dog) => {
//     const dogToAdd = {
//       id: dog.id,
//       image: {
//         url: dog.image,
//       },
//       name: dog.name,
//       weight: {
//         metric: dog.weight,
//       },
//       temperament: `${dog.Temperaments.map((temperament) => temperament.name)}`,
//     };
//     dogsFoundInDB.push(dogToAdd);
//   });

  const { data } = await axios(
    `https://api.thedogapi.com/v1/breeds/search?q=${nameCapitalized}`
  ); //Obtenemos todos los dogs con el nombre

  const dogsFoundinApi = [];

  for (const dog of data) {
    // Iteramos los dogs para buscar su imagen con Id de referencia
    if (dog.hasOwnProperty("reference_image_id")) {
      // Comprobar que los perritos tengas id de referencia
      let { data } = await axios(
        `https://api.thedogapi.com/v1/images/${dog?.reference_image_id}`
      );

      const newDog = {
        id: data?.breeds[0].id,
        image: {
          url: data?.url,
        },
        name: data?.breeds[0].name,
        weight: data?.breeds[0].weight,
        temperament: data?.breeds[0]?.temperament,
      };

      dogsFoundinApi.push(newDog);
    }
  }

  if (dogsFoundInDB.length === 0 && data.length !== 0) return dogsFoundinApi;
  if (dogsFoundInDB.length !== 0 && data.length === 0) return dogsFoundInDB;
  if (dogsFoundInDB.length !== 0 && data.length !== 0)
    return dogsFoundInDB.concat(dogsFoundinApi);

  return `There is not dogs with ${name}`;
};

module.exports = getAllOrByName;
