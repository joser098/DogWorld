import { useDispatch } from "react-redux";
import { useState } from "react";
import { handleInput, handleSearch } from "./SearchBarHandlers";
import { showResult } from '../../redux/actions';
import styles from './SearchBar.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar = () => {
    const dispatch = useDispatch();
    const [nameToSearch, setNametoSearch] = useState('');

    const handleInputBar = (event) => {
        handleInput(event, setNametoSearch)
    };

    const handleSearchButton = (event) => {
        event.preventDefault();
        handleSearch(nameToSearch, dispatch, showResult, toast);
        setNametoSearch('');
    };


    return (
        <div className={styles.container}>
            <input className={styles.input} value={nameToSearch}
                name="nameToSearch"
                type="search"
                placeholder="Name to search"
                onChange={handleInputBar}
            />

            <button className={styles.btn} onClick={handleSearchButton}>🔍</button>
            <ToastContainer />
        </div>
    )
};


export default SearchBar; 
