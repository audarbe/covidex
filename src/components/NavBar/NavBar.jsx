import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    let userControlPanel = props.user ?
        <div>
            <Link to='/facilities'>MY FACILITIES</Link> | 
            <Link
                to=''
                onClick={props.handleLogout}
            >
                 LOG OUT
            </Link> |
        WELCOME, {props.user.name}

        </div>
        :
        <div>
            <Link
                to='/login'
            >
                LOG IN
            </Link> |
            <Link
                to='/signup'
            >
                SIGN UP
            </Link>
        </div>
        ;

    return (
        <nav className='NavBar'>
        <Link to='/'>COVIDEX</Link>
        {userControlPanel}
        </nav>
    );
};

export default NavBar;