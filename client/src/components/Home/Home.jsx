import { useState, useEffect } from 'react';
import { nextHandler, prevHandler, firstShow, handleFilter, handleOrder } from './homeHandlers';
import DogCard from '../DogCard/DogCard';
import { useDispatch, useSelector} from 'react-redux';
import { getDogs } from '../../redux/actions'; 


const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.dogsToShow);
    const [ cardsToShow, setCardsToShow ] = useState([]);
    const [ currentPage, setCurrentPage ] = useState(0);
 

    
    useEffect(() => {
        dispatch(getDogs());
    }, []);

    useEffect(() => {
        firstShow(allDogs, setCardsToShow)
    }, [allDogs])


    const nextButtonHandler = () => {
        nextHandler(allDogs, currentPage, setCardsToShow, setCurrentPage);
    };
    
    const prevButtonHandler = () => {
        prevHandler(allDogs, currentPage, setCardsToShow, setCurrentPage);
    };
    
    const handleSelectFilter = (event) => {
        const { value } = event.target;
        handleFilter(value, dispatch)
    };

    const handleSelectOrder = (event) => {
        const { value } = event.target;
        handleOrder(value, dispatch)
    };
    
    return(
        <div>
             <select onChange={handleSelectFilter}> 
                <option value="AD">Al Dogs</option>
                <option value="API">Dogs from api</option>
                <option value="DB">Dogs from DB</option>
             </select>

             <select onChange={handleSelectOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
                <option value="AxW">Min weight</option>
                <option value="DxW">Max weight</option>
             </select>

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