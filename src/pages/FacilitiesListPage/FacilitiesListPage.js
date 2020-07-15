import React from 'react';
import { Link } from 'react-router-dom';

function FacilityListPage(props) {
    return (
        <>
            <h1>MY FACILITIES</h1>
            <div>
                <p>Facilities list here</p>
                <Link to='/facilities/add'>Add new facility</Link>
            </div>
        </>
    );
}

export default FacilityListPage;