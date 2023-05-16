import { useState, useEffect } from 'react';
import { fetch, nextHandler, prevHandler, firstShow } from './homeHandlers';
import DogCard from '../DogCard/DogCard';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [ dogs, setDogs ] = useState([]);
    const [ cardsToShow, setCardsToShow ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(0);
    const navigate = useNavigate();

//     const session = window.localStorage.getItem('session');
//     useEffect(() => {
//       !session && navigate('/')
//   }, [session]);

    
    useEffect(() => {
        fetch(setDogs) 
    }, []);

    useEffect(() => {
        firstShow(dogs, setCardsToShow)
        console.log(cardsToShow)
    }, [dogs])


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