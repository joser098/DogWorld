import { SET_USER, LOG_OUT, GET_DOGS, FILTER, ORDER } from './actionsTypes'
import axios from 'axios';

export const setUser = (user) => {
    return { type: SET_USER, payload: user }
};

export const logOut = () => {
    return { type: LOG_OUT, payload: null }
};

export const getDogs = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios(`http://localhost:3001/dogs`);
            
            return dispatch({ type: GET_DOGS, payload: data });
        } catch (error) {
            return { type: GET_DOGS, payload: 'error en action'}
        }
    }
};

export const filterDogs = (dogsFrom) => {
    return { type: FILTER, payload: dogsFrom }
};


export const orderDogs = (order) => {
    return { type: ORDER, payload: order}
};


