import { useState } from "react";
import { useNavigate } from 'react-router-dom'
import { handleChange, handleSubmit } from "./RegisterHandlers";
import styles from './Register.module.css'


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
                       onChange={handleInputChange}/>
  
                <input className={styles.input} 
                       type="email" 
                       name="email" 
                       placeholder="Email"
                       value={userData.email}
                       onChange={handleInputChange}/>
    
                <input className={styles.input} 
                       type="password" 
                       name="password" 
                       placeholder="Password"
                       value={userData.password}
                       onChange={handleInputChange}/>
    
                <button className={styles.btn} onClick={handleButtonSubmit}>Register</button>
    
                <label className={styles.label}>Have an account</label>
                <a  className={styles.ref} href="/">Log In</a>
              </form>
            </div>
        </div>
    )
};

export default Register;