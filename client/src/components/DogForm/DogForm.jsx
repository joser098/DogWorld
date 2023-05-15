import { useEffect, useState } from "react";
import { getTemperaments, handleChange } from "./dogFormHandlers";


const DogForm = () => {
    const [ tempsToShow, setTempsToShow ] = useState([])
    const [ temperaments, setTemperaments] = useState([]);
    const [ tempsSelected, setTempsSelected ] = useState([]);
    const [ dogToCreate, setDogToCreate ] = useState({
        name: '',
        height_min: '',
        height_max: '',
        weight_min: '',
        weight_max: '',
        life_span_min: '',
        life_span_max: '',
        temperaments: []
    });

    const handleInputChange = (event) => {
        handleChange(event, setDogToCreate, dogToCreate)
    };

    const handleChangeAddButton = (option) => {
        setDogToCreate({
            ...dogToCreate,
            temperaments: [...dogToCreate.temperaments, option]
        });

        // const tempFound = temperaments.find(temp => temp.id === +option);
        // setTempsToShow([...tempsToShow, tempFound.name]);

        console.log(dogToCreate)
    }


    useEffect(() => {
        getTemperaments(setTemperaments);
        return () => {
            setTemperaments([])}
    }, []);



    return(
        <div>
            <h3>Create a new dog to share it</h3>
            <input onChange={handleInputChange} value={dogToCreate.name} name="name" type="text" placeholder="Name" />
            <br></br>

            <label htmlFor="height">Min and max height in cm</label>
            <input onChange={handleInputChange} value={dogToCreate.height_min} name="height_min" type="number" min='15' max='110'/>
            <input onChange={handleInputChange} value={dogToCreate.height_max} name="height_max" type="number" min='15' max="110"/>

            <label htmlFor="weight">Min and max weight in kg</label>
            <input onChange={handleInputChange} value={dogToCreate.weight_min} name="weight_min" type="number" min='1' max='35'/>
            <input onChange={handleInputChange} value={dogToCreate.weight_max} name="weight_max" type="number" min='5' max="80"/>

            <label htmlFor="lifeSpan">Life span</label>
            <input onChange={handleInputChange} value={dogToCreate.life_span_min} name="life_span_min" type="number" min='7' max='15'/>
            <input onChange={handleInputChange} value={dogToCreate.life_span_max} name="life_span_max" type="number" min='8' max="20"/>

            <label htmlFor="temperaments">Temperaments</label>
            <select id='options'>
                {
                    temperaments?.map((temp) => {
                        return(
                        <option value={temp.id} id={temp.name}>{temp.name}</option>
                        )
                    })
                }
            </select>
            <button onClick={() => handleChangeAddButton(document.getElementById('options').value)}>Add Temperament</button>
            
            <button>Create</button>
        </div>
    )
};


export default DogForm;