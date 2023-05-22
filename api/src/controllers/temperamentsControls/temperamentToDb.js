const { Temperament } = require('../../db');
const getAllTemperaments = require('../../helper/getAllTemperaments');

const temperamentToDb = async () => {
    try {
        // Primero debemos validar que los datos ya estan cargados en la DB sino habra confliccto por duplicado y rompera el servidor
        const checkDB = await Temperament.findAll();
        if (checkDB.length !== 0) return checkDB;

        // Una vez validado que no estan cargados en la DB podemos anadir para luego utilizar desde alli
        const allTemperaments = await getAllTemperaments();

        for (const name of allTemperaments) {
            await Temperament.create({ name })
        };

        // Los obtenemos desde la DB y retornamos para que sean utilizados.
        const allTempsInDB = await Temperament.findAll();

        return allTempsInDB;
    } catch (error) {
        return { message: error.message };
    }
};

module.exports = temperamentToDb;