import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";
import styles from './Nav.module.css';


const Nav = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    };


    return(
        <div className={styles.background}>
            <div className={styles.container}>
              <SearchBar/>
              
              <NavLink to='home' className={styles.nav}>
                  <button className={styles.btn}> Home </button>
              </NavLink>

              <NavLink to='newdog' className={styles.nav}>
                  <button className={styles.btn}> Create </button>
              </NavLink>

              <NavLink to='Account' className={styles.nav}>
                  <button className={styles.btn}> Account </button>
              </NavLink>

              <NavLink to='/' className={styles.nav}>
                 <button className={styles.btn} onClick={handleLogOut}> Log Out </button> 
              </NavLink>
  
            </div>
        </div>
    )
};

export default Nav;