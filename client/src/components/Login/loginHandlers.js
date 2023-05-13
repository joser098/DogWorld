import axios from 'axios';

export const handleChange = (event, userData, setUserData) => {
    const { name, value } = event.target;
    setUserData({
        ...userData,
        [name]:value
    })
};



export const handleSubmit = async (event, userData, navigate, dispatch, action) => {
    try {
        event.preventDefault();
        const { email, password } = userData;
        const { data } = await axios(`http://localhost:3001/user/?email=${email}&password=${password}`);
        const { access, userFound } = data;
        
        dispatch(action(userFound));
        // window.localStorage.setItem('session', access);
        // console.log(localStorage);
        navigate('/home');     
    } catch (error) {
        window.confirm(`Check info provided is correct and be sure you're registered`);
    }
};