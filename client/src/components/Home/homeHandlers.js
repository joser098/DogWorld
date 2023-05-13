import axios from 'axios';

export const cardsPerPage = 8;
export const fetch = async (setDogs) => {
            try {
                const {data} = await axios(`http://localhost:3001/dogs`);
                setDogs(data)
            } catch (error) {
                console.log(error)
            }
        };

export const nextHandler = (dogs, currentPage, setCardsToShow, setCurrentPage) => {
    const totalDogs = dogs.length;
    
    const nextPage = currentPage + 1;

    const firstCard = nextPage * cardsPerPage;

    if(firstCard >= totalDogs) return;

    setCardsToShow([...dogs].splice(firstCard, cardsPerPage));
    setCurrentPage(nextPage);
};

export const prevHandler = (dogs, currentPage, setCardsToShow, setCurrentPage) => {
    const prevPage = currentPage - 1;

    if( prevPage < 0) return;

    const firstCard = prevPage * cardsPerPage;

    setCardsToShow([...dogs].splice(firstCard, cardsPerPage));
    setCurrentPage(prevPage);
};

export const firstShow = (dogs, setCardsToShow) => {
    setCardsToShow([...dogs].slice(0, cardsPerPage))
}


