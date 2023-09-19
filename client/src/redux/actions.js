import newGetDogs from '../help/newGetDogs';
import { SET_USER, LOG_OUT, GET_DOGS, SHOW_RESULT, ORDER_ASC, ORDER_DSC, ORDER_ASC_W, ORDER_DSC_W, FILTER_API, FILTER_DB, NOT_FOUND_MESSAGE, CLEAN_MESSAGE, FILTER_TEMPS } from './actionsTypes'
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
            // const { data } = await axios(`/dogs`);
            const response = await newGetDogs()

            return dispatch({ type: GET_DOGS, payload: response});
        } catch (error) {
            return { type: GET_DOGS, payload: 'error en action' }
        }
    }
};

export const showResult = (result) => {
    return { type: SHOW_RESULT, payload: result }
};

export const orderAsc = () => {
    return { type: ORDER_ASC, payload: null }
};

export const orderDsc = () => {
    return { type: ORDER_DSC, payload: null }
};

export const orderAscW = () => {
    return { type: ORDER_ASC_W, payload: null }
};

export const orderDscW = () => {
    return { type: ORDER_DSC_W, payload: null }
};


export const filterApi = () => {
    return { type: FILTER_API, payload: null }
};

export const filterDb = () => {
    return { type: FILTER_DB, payload: null }
};

export const filterTemps = (temps) => {
    return { type: FILTER_TEMPS, payload: temps }
};

export const notFound_message = (message) => {
    return { type: NOT_FOUND_MESSAGE, payload: message }
};

export const clean_message = () => {
    return { type: CLEAN_MESSAGE, payload: null }
};