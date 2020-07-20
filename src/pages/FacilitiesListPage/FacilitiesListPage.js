import React from 'react';
import FacilityListItem from '../../components/FacilityListItem/FacilityListItem'

function FacilityListPage(props) {
    return (
        <div className="container-single-page">
            <h3>MY FACILITIES</h3>
            {props.facilities.length > 0 ?
                <div className="single-page-container">
                    {props.facilities
                        .filter(facility => facility.userId === props.user._id)
                        .map(facility => {
                            return (
                                <FacilityListItem
                                    facility={facility}
                                    user={props.user}
                                    key={facility._id}
                                    handleDeleteFacility={props.handleDeleteFacility}
                                    handleEditFacility={props.handleEditFacility}
                                />
                            )
                        }
                        )}
                </div>
                :
                <p>Fetching data...</p>
            }
        </div>
    );
}

export default FacilityListPage;