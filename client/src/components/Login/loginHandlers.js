import axios from 'axios';
import { validation } from './validation';
import { notFound_message, clean_message } from '../../redux/actions';

export const handleChange = (event, userData, setUserData, error, setErrors) => {
    const { name, value } = event.target;
    setUserData({
        ...userData,
        [name]:value
    })
    setErrors(
        validation({
            ...userData,
            [name]:value
        })
    )
};



export const handleSubmit = async (event, userData, navigate, dispatch, action) => {
    try {
        event.preventDefault();
        const { email, password } = userData;
        const { data } = await axios(`/user/?email=${email}&password=${password}`);
        const { access, userFound } = data;
        
        dispatch(action(userFound));
        // window.localStorage.setItem('session', access);
        // console.log(localStorage);
        navigate('/home');     
    } catch (error) {
        dispatch(notFound_message(`Check info provided is correct and be sure you're registered`))

        setTimeout(() => {
            dispatch(clean_message())
        }, "3000")
    }
};