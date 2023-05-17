import { useEffect, useState } from "react";
import { getTemperaments, handleChange, handleTempsToShow, handleSubmitButton, disableSubmit } from "./dogFormHandlers";
import { validations } from './validations'

const DogForm = () => {
    const [ tempSelected, setTempSelected ] = useState('')
    const [ tempsToShow, setTempsToShow ] = useState([])
    const [ temperaments, setTemperaments] = useState([]);
    const [ dogToCreate, setDogToCreate ] = useState({
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
    const [ errors, setErrors ] = useState({
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

    const handleInputChange = (event) => {
        handleChange(event, setDogToCreate, dogToCreate, setErrors, validations)
    };

    const handleChangeAddButton = (event) => {
        event.preventDefault();

        setDogToCreate((dogToCreate) => ({
            ...dogToCreate,
            temperaments: [...dogToCreate.temperaments, tempSelected ]
        }));

        handleTempsToShow(tempSelected, setTempsToShow, tempsToShow, temperaments);
    };

    const handleSubmitCreateButton = (event) => {
        event.preventDefault();
        handleSubmitButton(dogToCreate, setDogToCreate, setTempsToShow);
    };


    useEffect(() => {
        getTemperaments(setTemperaments);
        return () => {
            setTemperaments([])}
    }, []);

    return(
        <div>
            <h3>Create a new dog to share it</h3>
            <input onChange={handleInputChange} value={dogToCreate.name} name="name" type="text" placeholder="Name" />
            {errors.name && <p>{errors.name}</p>}

            <label htmlFor="height">Min and max height in cm</label>
            <input onChange={handleInputChange} value={dogToCreate.height_min} name="height_min" type="number" min='15' max='110'/>
            <input onChange={handleInputChange} value={dogToCreate.height_max} name="height_max" type="number" min='15' max="110"/>
            {errors.height_min && <p>{errors.height_min}</p>}
            {errors.height_max && <p>{errors.height_max}</p>}

            <label htmlFor="weight">Min and max weight in kg</label>
            <input onChange={handleInputChange} value={dogToCreate.weight_min} name="weight_min" type="number" min='1' max='60'/>
            <input onChange={handleInputChange} value={dogToCreate.weight_max} name="weight_max" type="number" min='3' max="90"/>
            {errors.weight_min && <p>{errors.weight_min}</p>}
            {errors.weight_max && <p>{errors.weight_max}</p>}


            <label htmlFor="lifeSpan">Life span</label>
            <input onChange={handleInputChange} value={dogToCreate.life_span_min} name="life_span_min" type="number" min='7' max='15'/>
            <input onChange={handleInputChange} value={dogToCreate.life_span_max} name="life_span_max" type="number" min='8' max="20"/>
            {errors.life_span_min && <p>{errors.life_span_min}</p>}
            {errors.life_span_max && <p>{errors.life_span_max}</p>}

            <div>
            <label htmlFor="image">Image</label>
            <input onChange={handleInputChange} value={dogToCreate.image} name="image" type="url" placeholder="url image" />
            {errors.image && <p>{errors.image}</p>}
            </div>



            <label htmlFor="temperaments">Temperaments</label>
            <select name="select" onChange={(event) => { setTempSelected(event.target.value) }} >
                {
                    temperaments?.map((temp) => {
                        return(
                        <option value={temp.id} key={temp.name}>{temp.name}</option>
                        )
                    })
                }
            </select>

            <button onClick={handleChangeAddButton} disabled={!tempSelected}>Add Temperament</button>
            {errors.temperaments && <p>{errors.temperaments}</p>}

            

            { tempsToShow.length > 0 ? <h5>Temperaments: {tempsToShow}</h5> :null}
            {dogToCreate.name 
            ? <button onClick={handleSubmitCreateButton} 
                      disabled={!disableSubmit(errors)} >Create</button> 
            : null }
        </div>
    )
};


export default DogForm;