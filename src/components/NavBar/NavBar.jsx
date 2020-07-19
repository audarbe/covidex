import React from 'react';
import './NavBar.css'
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let userControlPanel = props.user ?
            <ul>
                <li>
                    <Link to=''><i>Welcome, {props.user.name}</i></Link>
                </li>
                <li>
                    <Link to='/facilities'>MY FACILITIES</Link>
                </li>
                <li>
                    <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
                </li>
            </ul>
        :
        <ul>
            <li>
                <Link to='/login'>LOG IN</Link>
            </li>
            <li>
                <Link to='' onClick={props.handleLogout}>LOG OUT</Link>
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