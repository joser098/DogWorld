import axios from 'axios';

export const getDog = async (id, setDog) => { try {
    const { data } = await axios(`http://localhost:3001/dogs/${id}`);  
    setDog(data);
} catch (error) {
    alert(`There is not dog with id: ${id}`)
  }
};