import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './WebsiteHeader.css';

class WebsiteHeader extends Component {
    render() {
        return (
                <div className="nav-container">
                    <div className="nav-container-item-left">
                        <div onClick={() => this.props.handleMapClick('US')} className="logo">COVIDEX</div>
                        <i>{this.props.user ? `Welcome, ${this.props.user.name}` : ''}</i>
                    </div>
                    <div className="nav-container-item-right">
                        <NavBar
                            user={this.props.user}
                            handleLogout={this.props.handleLogout}
                            handleMapClick={this.props.handleMapClick}
                        />
                    </div>
                </div>
        );
    };
};

export default WebsiteHeader;



// 