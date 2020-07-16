import React from 'react';
import './FacilityListItem.css';
import { Link } from 'react-router-dom';

function FacilityListItem(props) {
    return (
        <>
            { props.facilities.length > 0 ?
                <div>
                    {props.facilities
                        .filter(facility => facility.userId === props.user._id)
                        .map(facility => {
                            return (
                                <div key={facility._id} className="card">
                                    <h3>{facility.name}</h3>
                                    <p>{facility.description}</p>
                                    <p>
                                        <b>Address:</b><br />
                                        {facility.streetAddress}<br />
                                        {facility.suiteNum}<br />
                                        {facility.city}, {facility.state} {facility.zipCode}
                                    </p>
                                    <p><small>User ID: {props.user._id}</small></p>
                                    <Link to={{
                                        pathname: 'facilities/edit',
                                        state: { facility },
                                    }}>
                                        EDIT
                            </Link>
                                    <button onClick={() => props.handleDeleteFacility(facility._id)}>Delete</button>
                                </div>
                            )
                        }
                        )}
                </div>
            :
                <p>Fetching data...</p>
            }
        </>
    );
}


export default FacilityListItem;