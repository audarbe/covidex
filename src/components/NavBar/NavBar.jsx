import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let userControlPanel = props.user ?
            <ul>
                <li>
                    <Link to='/facilities'>My Facilities</Link>
                </li>
                <li>
                    <Link to='' onClick={props.handleLogout}>Log Out</Link>
                </li>
            </ul>
        :
        <ul>
            <li>
                <Link to='/login'>Log In</Link>
            </li>
            <li>
                <Link to='/signup' onClick={props.handleLogout}>Sign Up</Link>
            </li>
        </ul>
        ;

    return (
        <nav>
            {userControlPanel}
        </nav>
    );
};

export default NavBar;