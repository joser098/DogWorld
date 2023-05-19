import { useEffect, useState } from "react";
import { getTemperaments, handleChange, handleTempsToShow, handleSubmitButton, disableSubmit } from "./dogFormHandlers";
import { validations } from './validations';
import styles from './DogForm.module.css';

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
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmitCreateButton}>
            <h3 className={styles.title}>CREATE A NEW DOG TO SHARE IT</h3>
            <label htmlFor="name" className={styles.label}>NAME</label>
            <input className={styles.input} onChange={handleInputChange} value={dogToCreate.name} name="name" type="text" placeholder="Name" />
            {errors.name && <p>{errors.name}</p>}

            <label className={styles.label} htmlFor="height">HEIGHT (cm)</label>
            <input className={styles.input_num} onChange={handleInputChange} value={dogToCreate.height_min} placeholder="min" name="height_min" type="number" min='15' max='110'/>
            <input className={styles.input_num} onChange={handleInputChange} value={dogToCreate.height_max} placeholder="max" name="height_max" type="number" min='15' max="110"/>
            {errors.height_min && <p>{errors.height_min}</p>}
            {errors.height_max && <p>{errors.height_max}</p>}

            <label className={styles.label} htmlFor="weight">WEIGHT (kg)</label>
            <input className={styles.input_num} onChange={handleInputChange} value={dogToCreate.weight_min} placeholder="min" name="weight_min" type="number" min='1' max='60'/>
            <input className={styles.input_num} onChange={handleInputChange} value={dogToCreate.weight_max} placeholder="max" name="weight_max" type="number" min='3' max="90"/>
            {errors.weight_min && <p>{errors.weight_min}</p>}
            {errors.weight_max && <p>{errors.weight_max}</p>}


            <label htmlFor="lifeSpan" className={styles.label}>LIFE SPAN</label>
            <input className={styles.input_num} onChange={handleInputChange} value={dogToCreate.life_span_min} placeholder="min" name="life_span_min" type="number" min='7' max='15'/>
            <input className={styles.input_num} onChange={handleInputChange} value={dogToCreate.life_span_max} placeholder="max" name="life_span_max" type="number" min='8' max="20"/>
            {errors.life_span_min && <p>{errors.life_span_min}</p>}
            {errors.life_span_max && <p>{errors.life_span_max}</p>}

            <div>
            <label className={styles.label} htmlFor="image">IMAGE (url)</label>
            <input className={styles.input} onChange={handleInputChange} value={dogToCreate.image} name="image" type="url" placeholder="url image" />
            {errors.image && <p>{errors.image}</p>}
            </div>



            <label className={styles.label} htmlFor="temperaments">TEMPERAMENTS</label>
            <select className={styles.select} name="select" onChange={(event) => { setTempSelected(event.target.value) }} >
                {
                    temperaments?.map((temp) => {
                        return(
                        <option className={styles.option} value={temp.id} key={temp.name}>{temp.name}</option>
                        )
                    })
                }
            </select>

            <button className={styles.add_btn} onClick={handleChangeAddButton} disabled={!tempSelected}>Add Temperament</button>
            {errors.temperaments && <p>{errors.temperaments}</p>}

            

            { tempsToShow.length > 0 ? <h5 className={styles.temperaments}>Temperaments: {tempsToShow}</h5> :null}
            {dogToCreate.name 
            ? <button className={styles.btn_create} 
                      disabled={!disableSubmit(errors)} >Create</button> 
            : null }
            </form>
        </div>
    )
};


export default DogForm;