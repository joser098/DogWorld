import axios from "axios";

export const getTemperaments = async (setTemperaments) => {
    const {data} = await axios(`/temperaments`)

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
    if(tempsToShow.includes(` ${nameFound.name}`)) return;

    setTempsToShow([...tempsToShow, ` ${nameFound.name}`])
};

export const handleSubmitButton = async (dogToCreate, setDogToCreate, setTempsToShow, toast) => {
    try {
        const newDog = {
            name: dogToCreate.name[0].toUpperCase() + dogToCreate.name.slice(1).toLowerCase(),
            height: `${dogToCreate.height_min} - ${dogToCreate.height_max}`,
            weight: `${dogToCreate.weight_min} - ${dogToCreate.weight_max}`,
            life_span: `${dogToCreate.life_span_min} - ${dogToCreate.life_span_max} years`,
            image: `${dogToCreate.image}`,
            temperaments: dogToCreate.temperaments
        };
    
        const { data } = await axios.post('/dogs', newDog);

        toast.success('Created successfully!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

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
        toast.error('Sorry, something went wrong!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
};

