import axios from "axios";
import { clean_message, notFound_message } from "../../redux/actions";

export const handleInput = (event, setNameToSearch) => {
    const { value } = event.target;
    setNameToSearch(value)
};

export const handleSearch = async (nameToSearch, dispatch, showResult, toast, navigate) => {
    try {
        const response = await toast.promise(
            axios(`http://localhost:3001/dogs/?name=${nameToSearch}`),
            {
              pending: `🐶 Looking for ${nameToSearch} dogs`,
            }
        );
        if(typeof response.data === 'string'){
            toast.warn(`🐶 ${response.data}`, {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            return;
        };

        toast.success(`🐶 Here are the ${nameToSearch} dogs`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
            });

        dispatch(showResult(response.data))
    } catch (error) {
        toast.error(error, {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: false,
            pauseOnHover: false,
            draggable: false,
            progress: undefined,
            theme: "dark",
            })
    }
};