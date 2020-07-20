import React from 'react';
import './WebsiteFooter.css'

function WebsiteFooter(props) {
    return (

        <div className="footer-container">
            <div className="footer-container-left">
                <div>
                <div onClick={() => props.handleMapClick('US')} className="logo">COVIDEX</div>
                </div>
                <div>
                    <p>GA • SEI • Project 4</p>
                    <p>MERN Stack App</p>
                </div>
            </div>
            <div className="footer-container-right">
                <a href="https://github.com/audarbe/covidex" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </div>
        </div>
    )
}

export default WebsiteFooter;