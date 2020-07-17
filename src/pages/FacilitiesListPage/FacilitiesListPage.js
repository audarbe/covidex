import React from 'react';
import { Link } from 'react-router-dom';
import FacilityListUsers from '../../components/FacilityList/FacilityListUsers'

function FacilityListPage(props) {
    return (
        <>
            <h1>MY FACILITIES</h1>
            <FacilityListUsers
                user={props.user}
                facilities={props.facilities}
                handleDeleteFacility={props.handleDeleteFacility}
            />
            <div>
                <Link to='/facilities/add'>Add new facility</Link>
            </div>
        </>
    );
}

export default FacilityListPage;