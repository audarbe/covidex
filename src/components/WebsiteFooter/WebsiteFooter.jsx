import React from 'react';
import './WebsiteFooter.css'
import { Link } from 'react-router-dom';

function WebsiteFooter() {
    return (

        <div className="footer">
            <ul>
                <li>
                    <Link to=''>GA Project 4: Full-Stack React</Link>
                </li>
                <li>
                    <Link to='/facilities'>Alex Udarbe</Link>
                </li>
                <li>
                    <Link to='/facilities'>Github</Link>
                </li>
            </ul>
        </div>
    )
}

export default WebsiteFooter;