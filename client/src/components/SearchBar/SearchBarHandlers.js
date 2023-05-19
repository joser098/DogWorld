import axios from "axios";
import { clean_message, notFound_message } from "../../redux/actions";

export const handleInput = (event, setNameToSearch) => {
    const { value } = event.target;
    setNameToSearch(value)
};

export const handleSearch = async (nameToSearch, dispatch, showResult, setNametoSearch) => {
    try {
        const { data } = await axios(`http://localhost:3001/dogs/?name=${nameToSearch}`);

         dispatch(showResult(data)) 
    } catch (error) {
        dispatch(notFound_message('Sorry, dogs not found'))

        setTimeout(() => {
            dispatch(clean_message())
        }, "4000")
    }
};