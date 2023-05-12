import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { handleChange, handleSubmit } from "./RegisterHandlers";

const Register = () => {
    const navigate = useNavigate();
    const [ userData, setUserData ] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [ errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        handleChange(event, userData, setUserData);
    };

    const handleButtonSubmit = async (event) => {
       await handleSubmit(event, userData, navigate);
    }


    return(
        <div>
            <form>
                <h3>Register for doggy experience</h3>

            <label htmlFor="info">Complete all info</label>
            <input type="text" 
                   name="name" 
                   placeholder="Name"
                   value={userData.name}
                   onChange={handleInputChange}/>

            <input type="email" 
                   name="email" 
                   placeholder="Email"
                   value={userData.email}
                   onChange={handleInputChange}/>

            <input type="password" 
                   name="password" 
                   placeholder="Password"
                   value={userData.password}
                   onChange={handleInputChange}/>

            <button onClick={handleButtonSubmit}>Register</button>

            <label>Have an account</label>
            <a href="/">Log In</a>
            </form>
        </div>
    )
};

export default Register;