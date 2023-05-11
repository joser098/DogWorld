import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const Nav = () => {
    return(
        <div>
            <SearchBar/>

            <NavLink to='home'>
                Home
            </NavLink>

            <NavLink to='newdog'>
                Create
            </NavLink>

            <NavLink to='profile'>
                Account
            </NavLink>

            <NavLink to='/'>
                Log Out
            </NavLink>

        </div>
    )
};

export default Nav;