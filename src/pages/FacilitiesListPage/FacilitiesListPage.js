import React from 'react';
import { Link } from 'react-router-dom';

function FacilityListPage(props) {
    return (
        <>
            <h1>MY FACILITIES</h1>
            <div>
                {props.facilities.map((facility, idx) => 
                    <p key={idx}>{facility.name} | 
                    <Link to={{
                            pathname: 'facilities/edit',
                            state: {facility},
                            }}>
                            EDIT
                    </Link> |
                    <button onClick={() => props.handleDeleteFacility(facility._id)}>Delete</button></p>
                )}
                --
                <div>
                    <Link to='/facilities/add'>Add new facility</Link>
                </div>
            </div>
        </>
    );
}

export default FacilityListPage;