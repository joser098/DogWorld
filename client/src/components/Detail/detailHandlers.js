import axios from 'axios';
import { notFound_message, clean_message } from '../../redux/actions'

export const getDog = async (id, setDog) => { try {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);  
    setDog(data);
} catch (error) {
    alert(`There is not dog with id: ${id}`)
  }
};


export const handleDelete = async (id, dispatch, navigate) => {
  try {
   const { data } = await axios.delete(`http://localhost:3001/dogs/${id}`)

   dispatch(notFound_message(data.message))

   setTimeout(() => {
       dispatch(clean_message())
   }, "2000")

   setTimeout(() => {
       navigate('/home')
   }, "3000")

  } catch (error) {
    console.log(error)
  }
};

export const handleEdit = async (id, dispatch) => {
  try {
    const { data } = await axios.put(`http://localhost:3001/dogs/${id}`);

    dispatch(notFound_message(data))

    setTimeout(() => {
        dispatch(clean_message())
    }, "4000")
  } catch (error) {
    console.log(error)
  }
};