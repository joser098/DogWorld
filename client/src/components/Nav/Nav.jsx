import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions";


const Nav = () => {
    const dispatch = useDispatch();

    const handleLogOut = () => {
        dispatch(logOut())
    };


    return(
        <div>
            <SearchBar/>

            <NavLink to='home'>
                <button> Home </button>
            </NavLink>

            <NavLink to='newdog'>
                <button> Create </button>
            </NavLink>

            <NavLink to='Account'>
                <button> Account </button>
            </NavLink>

            <NavLink to='/'>
               <button onClick={handleLogOut}> Log Out </button> 
            </NavLink>

        </div>
    )
};

export default Nav;