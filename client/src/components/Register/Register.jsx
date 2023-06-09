import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { handleChange, handleSubmit } from "./RegisterHandlers";
import styles from './Register.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleInputChange = (event) => {
        handleChange(event, userData, setUserData, setErrors);
    };

    const handleButtonSubmit = async (event) => {
        await handleSubmit(event, userData, navigate, toast);
    }


    return (
        <div className={styles.background}>
            <div className={styles.cotainer}>
                <form className={styles.form}>
                    <h3 className={styles.title}>Register for doggy experience</h3>

                    <label className={styles.subTitle} htmlFor="info">Complete all info</label>
                    <input className={styles.input}
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={userData.name}
                        onChange={handleInputChange} />
                    {errors.name && <p className={styles.errors}>{errors.name}</p>}


                    <input className={styles.input}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={userData.email}
                        onChange={handleInputChange} />
                    {errors.email && <p className={styles.errors}>{errors.email}</p>}

                    <input className={styles.input}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={handleInputChange} />
                    {errors.password && <p className={styles.errors}>{errors.password}</p>}


                    <button className={styles.btn}
                        onClick={handleButtonSubmit}
                    >Register
                    </button>

                    <label className={styles.label}>Have an account</label>
                    <a className={styles.ref} href="/">Log In</a>
                </form>
            </div>
            <ToastContainer/>
        </div>
    )
};

export default Register;