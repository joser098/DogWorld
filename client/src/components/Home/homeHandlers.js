import axios from "axios";
import { filterApi, filterDb, filterTemps, getDogs, orderAsc, orderAscW, orderDsc, orderDscW } from '../../redux/actions';

export const getTemperaments = async (setTemperaments) => {
    const {data} = await axios(`/temperaments`)

    setTemperaments(data);
};

export const cardsPerPage = 8;

export const nextHandler = (allDogs, currentPage, setCardsToShow, setCurrentPage) => {
    const totalDogs = allDogs.length;
    
    const nextPage = currentPage + 1;

    const firstCard = nextPage * cardsPerPage;

    if(firstCard >= totalDogs) return;

    setCardsToShow([...allDogs].splice(firstCard, cardsPerPage));
    setCurrentPage(nextPage);
};

export const prevHandler = (allDogs, currentPage, setCardsToShow, setCurrentPage) => {
    const prevPage = currentPage - 1;

    if( prevPage < 0) return;

    const firstCard = prevPage * cardsPerPage;

    setCardsToShow([...allDogs].splice(firstCard, cardsPerPage));
    setCurrentPage(prevPage);
};

export const firstShow = (allDogs, setCardsToShow) => {
    setCardsToShow([...allDogs].slice(0, cardsPerPage))
};

export const handleFilter = (value, dispatch, setCurrentPage) => {
    if(value === 'API'){ dispatch(filterApi())}
    if(value === 'DB'){ dispatch(filterDb())}
    if(value === 'AD'){ dispatch(getDogs())}
    setCurrentPage(0)
};

export const handleOrder = (value, dispatch, setCurrentPage) => {
    if(value === 'A'){ dispatch(orderAsc())}
    if(value === 'D'){ dispatch(orderDsc())}
    if(value === 'AxW'){ dispatch(orderAscW())}
    if(value === 'DxW'){ dispatch(orderDscW())}
    setCurrentPage(0)
};

export const handleFilterTemps = (value, dispatch, setCurrentPage) => {
    dispatch(filterTemps(value))
    setCurrentPage(0)
};


