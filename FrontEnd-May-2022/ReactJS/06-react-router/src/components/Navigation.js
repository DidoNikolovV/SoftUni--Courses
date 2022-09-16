import { Link, NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

export const Navigation = () => {
    const setNavStyle = ({ isActive }) => {
        return isActive ? styles['active-link'] : 'lightgrey';
    };
    return (
        <nav>
            <ul>
                <li><NavLink className={setNavStyle} to="/">Home</NavLink></li>
                <li><NavLink className={setNavStyle} to="/about">About</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing">Pricing</NavLink></li>
                <li><NavLink className={setNavStyle} to="/pricing/premium">Premium Pricing</NavLink></li>

                <li>
                    <NavLink
                        to="/starships"
                        // style={({ isActive }) => ({
                        //     backgroundColor: isActive ? 'lightblue' : 'lightgrey'

                        // })}
                        className={setNavStyle}
                    >
                        Starships
                    </NavLink>
                </li>


                <li><NavLink to=""></NavLink></li>


                <li><NavLink to="/millennium-falcon">Millennium Falcon</NavLink></li>
            </ul>
        </nav>
    );
};