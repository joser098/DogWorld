import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { handleInput, handleSearch } from "./SearchBarHandlers";
import { showResult } from '../../redux/actions'


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
        <div>
            <input  value={nameToSearch} 
                    name="nameToSearch" 
                    type="search" 
                    placeholder="Name to search"
                    onChange={handleInputBar} 
                    />

            <button onClick={handleSearchButton}>🔍</button>
        </div>
    )
};


export default SearchBar; 
