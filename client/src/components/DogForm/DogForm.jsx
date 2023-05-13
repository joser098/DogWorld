import { useEffect, useState } from "react";
import { getTemperaments } from "./dogFormHandlers";

const DogForm = () => {
    const [ temperaments, setTemperaments] = useState();
    const [ dogToCreate, setDogToCreate ] = useState({
        name: '',
        height: '',
        weight: '',
        life_span: '',
        temperaments: ''
    });


    useEffect(() => {
        // getTemperaments();
    }, [])

    return(
        <div>
            <h3>Create a new dog to share it</h3>
            <input type="text" placeholder="Name" />
            <br></br>

            <label htmlFor="height">Min and max height in cm</label>
            <input type="number" min='15' max='110'/>
            <input type="number" min='15' max="110"/>

            <label htmlFor="weight">Min and max weight in kg</label>
            <input type="number" min='1' max='35'/>
            <input type="number" min='5' max="80"/>

            <label htmlFor="lifeSpan">Life span</label>
            <input type="number" min='7' max='15'/>
            <input type="number" min='8' max="20"/>

            <label htmlFor="temperaments">Temperaments</label>
            <select>
                {
                    // crear selects por cada temperamento
                }
            </select>
            
            <button>Create</button>
        </div>
    )
};


export default DogForm;