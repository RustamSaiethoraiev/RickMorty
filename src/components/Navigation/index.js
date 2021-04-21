import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="navigation">
            <ul>
                <li className="navlink">
                    <NavLink exact to="/">Characters</NavLink>
                </li>
                <li className="navlink">
                    <NavLink to="/addOwnHero">AddOwnHero</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation;