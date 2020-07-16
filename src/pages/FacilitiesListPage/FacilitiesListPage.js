import React from 'react';
import { Link } from 'react-router-dom';
import FacilityListItem from '../../components/FacilityListItem/FacilityListItem'

function FacilityListPage(props) {
    return (
        <>
            <h1>MY FACILITIES</h1>
            <FacilityListItem
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