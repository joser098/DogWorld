import { useSelector } from 'react-redux';
import styles from './Account.module.css';


const Account = () => {
    const state = useSelector(state => state.user);


    return (
        <div className={styles.container}>
            <div>
                <h3 className={styles.info}>Account info</h3>
                <h4 className={styles.name}> Username: <span className={styles.span}>{state.userName}</span></h4>
                <h4 className={styles.name}> Email: <span className={styles.span}>{state.userEmail}</span></h4>
            </div>
        </div>
    )
};

export default Account;