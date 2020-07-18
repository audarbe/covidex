import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class WebsiteHeader extends Component {
    render() {
        return (
            <>
                <NavBar 
                    user={this.props.user}
                    handleLogout={this.props.handleLogout}
                    handleMapClick={this.props.handleMapClick}
                />
                <div>
                    <div onClick={() => this.props.handleMapClick('US')}>COVIDEX</div>
                </div>
            </>
        );
    };
};

export default WebsiteHeader;



// 