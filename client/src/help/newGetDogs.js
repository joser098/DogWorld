import axios from "axios";

const newGetDogs = async () => {
  try {
    const { data } = await axios(
      `https://api.thedogapi.com/v1/breeds?limit=20`
    ); //obtenemos todos los dogs de la Api

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

    return dogsFoundinApi;
  } catch (error) {
    console.log(error);
  }
};

export default newGetDogs;
