import axios from 'axios';

export const getTemperaments = async () => {
    await axios('http://localhost:3001/temperaments');
};