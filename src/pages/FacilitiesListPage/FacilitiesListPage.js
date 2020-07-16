import React from 'react';
import { Link } from 'react-router-dom';

function FacilityListPage(props) {
    return (
        <>
            <h1>MY FACILITIES</h1>
            { props.facilities.length > 0 ?
            <div>
                {props.facilities
                    .filter(facility => facility.userId === props.user._id)
                    .map(facility => {
                    return (
                        <div key={facility._id}>
                        
                            <h3>Name: {facility.name}</h3>
                            <p>State: {facility.state}</p>
                            <p>User ID: {props.user._id}</p>
                            <Link to={{
                                    pathname: 'facilities/edit',
                                    state: {facility},
                                    }}>
                                    EDIT
                            </Link> |
                            <button onClick={() => props.handleDeleteFacility(facility._id)}>Delete</button>
                            <p>-------</p>
                        </div>
                    )
                }
                )}
                --
            </div>
            :
            <h1>Not loaded</h1>
            }
            <div>
                    <Link to='/facilities/add'>Add new facility</Link>
            </div>
        </>
    );
}

export default FacilityListPage;