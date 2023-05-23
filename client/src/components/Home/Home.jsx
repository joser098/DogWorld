import { useState, useEffect } from 'react';
import { nextHandler, prevHandler, firstShow, handleFilter, handleOrder, getTemperaments, handleFilterTemps } from './homeHandlers';
import DogCard from '../DogCard/DogCard';
import { useDispatch, useSelector } from 'react-redux';
import { getDogs } from '../../redux/actions';
import styles from './Home.module.css';


const Home = () => {
    const dispatch = useDispatch();
    const allDogs = useSelector(state => state.dogsToShow);
    const message = useSelector(state => state.message);
    const [cardsToShow, setCardsToShow] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [temperaments, setTemperaments] = useState([]);

    useEffect(() => {
        getTemperaments(setTemperaments);
    }, [])

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
        handleFilter(value, dispatch, setCurrentPage)
    };

    const handleTempsFilter = (event) => {
        const  { value } = event.target;
        handleFilterTemps(value,dispatch, setCurrentPage);
    };

    const handleSelectOrder = (event) => {
        const { value } = event.target;
        handleOrder(value, dispatch, setCurrentPage)
    };

    return (
        <div>
            <div className={styles.select_div}>
                <span className={styles.span}>Filter by:</span>
                <select className={styles.select} onChange={handleSelectFilter}>
                    <option className={styles.option} value="AD">All Dogs</option>
                    <option className={styles.option} value="API">Dogs from api</option>
                    <option className={styles.option} value="DB">Dogs from DB</option>
                </select>

                <select className={styles.select} onChange={handleTempsFilter}>
                    { temperaments.map(temp => {
                            return (
                                <option className={styles.option} value={temp.name}> {temp.name} </option>
                            )
                        })}
                </select>

                <span className={styles.span}>Order by:</span>
                <select className={styles.select} onChange={handleSelectOrder}>
                    <option className={styles.option} value="A">Ascendente</option>
                    <option className={styles.option} value="D">Descendente</option>
                    <option className={styles.option} value="AxW">Min weight</option>
                    <option className={styles.option} value="DxW">Max weight</option>
                </select>
            </div>

            {message && <span className={styles.message}>{message}</span>}

            <div className={styles.card_container}>
                {
                    cardsToShow.map(({ id, image, name, weight, temperament }) => {
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
            </div>

            <button className={styles.btn} onClick={prevButtonHandler}> ◀ Prev </button>
            <label htmlFor="current">{currentPage}</label>
            <button className={styles.btn} onClick={nextButtonHandler}> Next ▶ </button>
        </div>
    )
};

export default Home;