import React, { Component } from 'react';
import NavBar from '../../components/NavBar/NavBar';

class WebsiteHeader extends Component {
    render() {
        return (
                <div>
                    <div>
                        <div onClick={() => this.props.handleMapClick('US')} className="logo">COVIDEX</div>
                    </div>
                    <div>
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