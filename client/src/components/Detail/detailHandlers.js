import axios from 'axios';
import { notFound_message, clean_message } from '../../redux/actions';
import { validations } from './validations';

export const getDog = async (id, setDog, dispatch, navigate) => { try {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);  
    setDog(data);
} catch (error) {
   dispatch(notFound_message(`There is not dog with id: ${id}`))

   setTimeout(() => {
       dispatch(clean_message())
   }, "3000")

   setTimeout(() => {
       navigate('/home')
   }, "3000")
  }
};

export const handleChange = (event, dataToUptade, setDataToUpdate, setErrors) => {
  const { name, value } = event.target;
  setDataToUpdate({
    ...dataToUptade,
    [name]:value
  })
  
  setErrors(
    validations({
      ...dataToUptade,
      [name]:value
    })
  )
}

export const handleDelete = async (id, dispatch, navigate) => {
  try {
   const { data } = await axios.delete(`http://localhost:3001/dogs/${id}`)

   dispatch(notFound_message(data.message))

   setTimeout(() => {
       dispatch(clean_message())
   }, "3000")

   setTimeout(() => {
       navigate('/home')
   }, "3000")

  } catch (error) {
    console.log(error)
  }
};

export const handleEdit = async (id, dispatch, dataToUptadte, setView, navigate) => {
  try {
    const newDataDog = {
      id: id,
      name: dataToUptadte.name,
      height: `${dataToUptadte.height_min} - ${dataToUptadte.height_max}`,
      weight: `${dataToUptadte.weight_min} - ${dataToUptadte.weight_max}`,
      life_span: `${dataToUptadte.life_span_min} - ${dataToUptadte.life_span_max} years`,
      image: `${dataToUptadte.image}`
  };

    const { data } = await axios.put(`http://localhost:3001/dogs/${id}`, newDataDog);

    dispatch(notFound_message(data.message))

    setTimeout(() => {
        dispatch(clean_message())
        window.location.reload()
    }, "1000")
    
  } catch (error) {
    console.log('aki')
  }
};

export const disableSubmit = (dataToUptade) => {
    return(
        !dataToUptade.name  || 
        !dataToUptade.height_min  ||
        !dataToUptade.height_max  ||
        !dataToUptade.weight_min  || 
        !dataToUptade.weight_max  ||
        !dataToUptade.life_span_min  ||
        !dataToUptade.life_span_max  ||
        !dataToUptade.image
    )
};