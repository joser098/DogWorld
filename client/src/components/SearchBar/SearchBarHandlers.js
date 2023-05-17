import axios from "axios";

export const handleInput = (event, setNameToSearch) => {
    const { value } = event.target;
    setNameToSearch(value)
};

export const handleSearch = async (nameToSearch, dispatch, showResult, setNametoSearch) => {
    try {
        const { data } = await axios(`http://localhost:3001/dogs/?name=${nameToSearch}`);

        if(typeof data === 'string'){
            alert(data);
            return;
        }

         dispatch(showResult(data)) 
    } catch (error) {
        console.log(error)
    }
};