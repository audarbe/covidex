import React, { Component } from 'react'
import './FacilityListItem.css'
import { Link } from 'react-router-dom';

class FacilityListItem extends Component {
    render() {
        let facility = this.props.facility;
        let card =
            <div className="card">
                {this.props.user && facility.userId === this.props.user._id ?
                    <div className="userCard-controls-container">
                        <div className="userCard-controls">
                            <div className="userCard-controls-left">
                                <p className="notice-blue">You manage this facility</p>
                            </div>
                            <div className="userCard-controls-right">
                                <Link
                                    className="card-link"
                                    to={{
                                        pathname: 'facilities/edit',
                                        state: { facility }
                                    }}>
                                    <i className="fas fa-edit link-icon"></i> Edit
                                    </Link>
                                <Link
                                    to=''
                                    className="card-link"
                                    onClick={() => this.props.handleDeleteFacility(facility._id)}>
                                    <i className="fas fa-times-circle link-icon"></i> Delete
                                    </Link>
                            </div>
                        </div>
                    </div>
                    :
                    ''
                }
                <div className="card-content">
                    <div className="card-content-left">
                        <h3>{facility.name}</h3>
                        <p className="facility-description">{facility.description}</p>
                    </div>
                    <div className="card-content-right">
                        <span className="label">Address:</span><br />
                        <p className="facility-address">
                            {facility.streetAddress}<br />
                            {facility.suiteNum}<br />
                            {facility.city}, {facility.state} {facility.zipCode}
                        </p>
                    </div>
                </div>
            </div>

        return (
            card
        )
    }
}

export default FacilityListItem;