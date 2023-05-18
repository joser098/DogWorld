import { useState } from "react";
import { handleChange, handleSubmit } from './loginHandlers';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/actions';
import styles from './Login.module.css'

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
        <div className={styles.background}>
            <div className={styles.container}>
              <form className={styles.form} >
                  <h3 className={styles.title}>Welcome to DogWorld</h3>
                  <input type="email"
                         name="email"
                         placeholder="Email"
                         value={userData.email}
                         onChange={handleInputChange}
                         className={styles.input}/>
  
                  <input type="text"
                         name="password"
                         placeholder="Password"
                         value={userData.password}
                         onChange={handleInputChange}
                         className={styles.input}/>

                  <button className={styles.btn} onClick={handlebuttonSubmit}>Log In 🐕</button>
  
                  <label className={styles.label}>Don't have an account yet?</label>
                  <a className={styles.ref} href="/register">Register</a>
              </form>
            </div>
        </div>
    )
};


export default Login;
