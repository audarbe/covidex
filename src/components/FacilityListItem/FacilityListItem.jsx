import React, { Component } from 'react'
import './FacilityListItem.css'
import { Link } from 'react-router-dom';

class FacilityListItem extends Component {
    render() {
        let facility = this.props.facility;
        let card =
            this.props.user._id && facility.userId === this.props.user._id ?
                <div
                    className="card userCard">
                    <h3>{facility.name}</h3>
                    <p>{facility.description}</p>
                    <p>
                        <b>Address:</b><br />
                        {facility.streetAddress}<br />
                        {facility.suiteNum}<br />
                        {facility.city}, {facility.state} {facility.zipCode}
                    </p>
                    <Link to={{ pathname: 'facilities/edit', state: { facility } }}>EDIT</Link>
                    <button onClick={() => this.props.handleDeleteFacility(facility._id)}>Delete</button>
                </div>

                :
                <div
                    className="card visitorCard">
                    <h3>{facility.name}</h3>
                    <p>{facility.description}</p>
                    <p>
                        <b>Address:</b><br />
                        {facility.streetAddress}<br />
                        {facility.suiteNum}<br />
                        {facility.city}, {facility.state} {facility.zipCode}
                    </p>
                </div>

        return (
            card
        )
    }
}

export default FacilityListItem;