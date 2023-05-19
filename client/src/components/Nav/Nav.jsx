import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";
import styles from './Nav.module.css';
import img from './dogworld.png'

const Nav = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    };


    return(
        <div className={styles.background}>

            <div className={styles.container}>
                <img className={styles.logo} src={img} alt="logo" />

              <SearchBar/>
              
              <NavLink to='home' className={styles.nav}>
                  <button className={styles.btn}> HOME </button>
              </NavLink>

              <NavLink to='newdog' className={styles.nav}>
                  <button className={styles.btn}> CREATE </button>
              </NavLink>

              <NavLink to='Account' className={styles.nav}>
                  <button className={styles.btn}> ACCOUNT </button>
              </NavLink>

              <NavLink to='/' className={styles.nav}>
                 <button className={styles.btn} onClick={handleLogOut}> LOG OUT </button> 
              </NavLink>
  
            </div>
        </div>
    )
};

export default Nav;