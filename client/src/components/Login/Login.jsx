import { useState } from "react";
import { handleChange, handleSubmit } from './loginHandlers';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
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

    const handlebuttonSubmit = (event) => {
        handleSubmit(event, userData, navigate, dispatch, setUser);
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
                <button onClick={handlebuttonSubmit}>Log In</button>

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
