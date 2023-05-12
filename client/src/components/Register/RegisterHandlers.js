import axios from 'axios';

export const handleChange = (event, userData, setUserData) => {
    const { value, name } = event.target;  
    setUserData({
        ...userData,
        [name]: value
    })
};

export const handleSubmit = async (event, userData, navigate) => {
    try {
        event.preventDefault();
    
        const { data } = await axios.post('http://localhost:3001/user', userData);
        
        data.message === 'registered successffuly'
        ?  navigate('/')
        :  navigate('/register')
    } catch (error) {
        console.log(error)
        // window.alert('Sorry something went wrong, try again please')
    }
}