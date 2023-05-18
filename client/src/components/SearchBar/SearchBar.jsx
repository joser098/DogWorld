import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { handleInput, handleSearch } from "./SearchBarHandlers";
import { showResult } from '../../redux/actions';
import styles from './SearchBar.module.css';


const SearchBar = () => {
    const dispatch = useDispatch();
    const dogsFound = useSelector(state => state.dogsToShow);
    const [ nameToSearch, setNametoSearch ] = useState('');

    const handleInputBar = (event) => {
        handleInput(event, setNametoSearch)
    };

    const handleSearchButton = (event) => {
        event.preventDefault();
        handleSearch(nameToSearch, dispatch, showResult);
        setNametoSearch('');
    };


    return (
        <div className={styles.container}>
            <input  className={styles.input} value={nameToSearch} 
                    name="nameToSearch" 
                    type="search" 
                    placeholder="Name to search"
                    onChange={handleInputBar} 
                    />

            <button className={styles.btn}  onClick={handleSearchButton}>🔍</button>
        </div>
    )
};


export default SearchBar; 
