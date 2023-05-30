import axios from 'axios';
import { validation } from './validation'

export const handleChange = (event, userData, setUserData, setErrors) => {
    const { value, name } = event.target;  
    setUserData({
        ...userData,
        [name]: value
    })
    setErrors(
        validation({
            ...userData,
            [name]:value
        })
    )
};

export const handleSubmit = async (event, userData, navigate, toast) => {
    try {
        event.preventDefault();
    
        const { data } = await axios.post('/user', userData);
        toast.success(data.message, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });

        setTimeout(() => {
                data.message === 'registered successffuly'
                ?  navigate('/')
                :  navigate('/register')
        }, 3000)
        
    } catch (error) {
        toast.error('This email is allready registered', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
    }
}