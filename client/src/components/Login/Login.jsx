import { useState } from "react";
import { handleChange } from './loginHandlers';

const Login = () => {
    const [ userData, setUserData ] = useState({
        email: '',
        password: ''
    });

    const [ errors, setErrors ] = useState({
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        handleChange(event, userData, setUserData)
    };

    return(
        <div>
            <form >
                <h3>Welcome to DogWorld</h3>
                <input type="email"
                       name="email"
                       placeholder="Email"
                       value={userData.email}
                       onChange={handleInputChange}/>

                <input type="text"
                       name="password"
                       placeholder="Password"
                       value={userData.password}
                       onChange={handleInputChange}/>
                <button>Log In</button>

                <label>Don't have an account</label>
                <a href="/register">Register</a>

                {
                    //Boton log in debe redirigir al Home y guardar sesion en GlobalState
                }
            </form>
        </div>
    )
};


export default Login;
