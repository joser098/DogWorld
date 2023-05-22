import axios from "axios";

export const getTemperaments = async (setTemperaments) => {
    const {data} = await axios(`http://localhost:3001/temperaments`)

    setTemperaments(data);
};

export const handleChange = (event, setDogToCreate, dogToCreate, setErrors, validations) => {
    const { name, value } = event.target;
    setDogToCreate({
        ...dogToCreate,
        [name]: value
    })
    setErrors(
        validations({
            ...dogToCreate,
            [name]:value
        })
    )
};

export const handleTempsToShow  = (tempSelected, setTempsToShow, tempsToShow, temperaments) => {
    const nameFound = temperaments.find(temp => temp.id === +tempSelected)
    setTempsToShow([...tempsToShow, ` ${nameFound.name}`])
};

export const handleSubmitButton = async (dogToCreate, setDogToCreate, setTempsToShow) => {
    try {
        const newDog = {
            name: dogToCreate.name[0].toUpperCase() + dogToCreate.name.slice(1).toLowerCase(),
            height: `${dogToCreate.height_min} - ${dogToCreate.height_max}`,
            weight: `${dogToCreate.weight_min} - ${dogToCreate.weight_max}`,
            life_span: `${dogToCreate.life_span_min} - ${dogToCreate.life_span_max} years`,
            image: `${dogToCreate.image}`,
            temperaments: dogToCreate.temperaments
        };
    
        const { data } = await axios.post('http://localhost:3001/dogs', newDog);

        setDogToCreate({
            name: '',
            height_min: '',
            height_max: '',
            weight_min: '',
            weight_max: '',
            life_span_min: '',
            life_span_max: '',
            image: '',
            temperaments: []
        });
        setTempsToShow([])

    } catch (error) {
        console.log(error)
    }

};


// export const disableSubmit = (errors) => {
//     return(
//         !errors.name  && 
//         !errors.height_min  &&
//         !errors.height_max  &&
//         !errors.weight_min  && 
//         !errors.weight_max  &&
//         !errors.life_span_min  &&
//         !errors.life_span_max  &&
//         !errors.image  &&
//         !errors.temperaments
//     )
// };
