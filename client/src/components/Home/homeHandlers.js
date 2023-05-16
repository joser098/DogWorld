import axios from 'axios';

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

export const handleFilter = (event) => {

};

export const handleOrder = () => {

};


