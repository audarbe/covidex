import React from 'react';
import FacilityListItem from '../../components/FacilityListItem/FacilityListItem'
import { Link } from 'react-router-dom';

function FacilityListPage(props) {
    return (
        <div className="container-single-page">
            <div className="section-header-container">
                <div className="section-header-left">
                    <h3>MY FACILITIES</h3>
                </div>
                <div className="section-header-right">
                    <Link className="card-link" to='/facilities/add'><i className="fas fa-plus-circle link-icon"></i> Add new facility</Link>
                </div>

            </div>
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