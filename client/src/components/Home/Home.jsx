import { useState, useEffect } from 'react';
import { fetch, cardsPerPage, nextHandler, prevHandler } from './homeHandlers';
import DogCard from '../DogCard/DogCard';

const Home = () => {
    const [ dogs, setDogs ] = useState([]);
    const [ cardsToShow, setCardsToShow ] = useState([...dogs].splice(0, cardsPerPage));
    const [ currentPage, setCurrentPage ] = useState(0);

    console.log(cardsToShow);
    useEffect(() => {
        fetch(setDogs) 
    }, []);

    const nextButtonHandler = () => {
        nextHandler(dogs, currentPage, setCardsToShow, setCurrentPage);
    }
    
    const prevButtonHandler = () => {
        prevHandler(dogs, currentPage, setCardsToShow, setCurrentPage);
    }
    
    
    return(
        <div>
            {
                cardsToShow.map(({id, image, name, weight, temperament}) => {
                   return (
                       <DogCard 
                       key={id}
                       id={id}
                       image={image.url}
                       name={name}
                       weight={weight.metric}
                       temperamet={temperament} />
                   )
                })
            }
            <button onClick={prevButtonHandler}>Prev</button>
            <label htmlFor="current">{currentPage}</label>
            <button onClick={nextButtonHandler}>Next</button>
        </div>
    )
};

export default Home;