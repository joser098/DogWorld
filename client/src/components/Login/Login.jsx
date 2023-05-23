import { useState } from "react";
import { handleChange, handleSubmit } from './loginHandlers';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/actions';
import styles from './Login.module.css'

const Login = () => {
    const message = useSelector(state => state.message)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        email: '',
        password: ''
    });



    const handleInputChange = (event) => {
        handleChange(event, userData, setUserData, errors, setErrors)
    };

    const handlebuttonSubmit = (event) => {
        handleSubmit(event, userData, navigate, dispatch, setUser);
    };

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <form className={styles.form} >
                    <h3 className={styles.title}>Welcome to DogWorld</h3>
                    <input type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleInputChange}
                        className={styles.input} />
                    {errors.email && <p className={styles.errors}>{errors.email}</p>}

                    <input type="text"
                        name="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleInputChange}
                        className={styles.input} />
                    {errors.password && <p className={styles.errorForm}>{errors.password}</p>}
                    {message && <span className={styles.message}>{message}</span>}
                    <button className={styles.btn} onClick={handlebuttonSubmit} >Log In 🐕</button>

                    <label className={styles.label}>Don't have an account yet?</label>
                    <a className={styles.ref} href="/register">Register</a>
                </form>
            </div>
        </div>
    )
};


export default Login;
