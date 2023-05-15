import axios from "axios";

export const getTemperaments = async (setTemperaments) => {
    const {data} = await axios(`http://localhost:3001/temperaments`)

    setTemperaments(data);
};

export const handleChange = (event, setDogToCreate, dogToCreate) => {
    const { name, value } = event.target;
    setDogToCreate({
        ...dogToCreate,
        [name]: value
    })
};
