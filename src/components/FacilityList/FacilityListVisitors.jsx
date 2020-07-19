import React from 'react';
import './FacilityList.css';
import { getStateName } from '../../utils/utilities';

function FacilityListVisitors(props) {
    let filteredStates = props.currentChoice === 'US' ?
        <div>
            {props.facilities.map(facility => {
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
                    </div>
                )
            }
            )}
        </div>
        :
        <div>
            { props.facilities
                .filter(facility => facility.state === props.currentChoice)
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
                        </div>
                    )
                }
                )}
        </div>

    return (
        <>
            <h2>{getStateName(props.currentChoice).toUpperCase()} TESTING FACILITIES</h2>
            {props.facilities.length > 0 ?
            <div>
                {filteredStates}
            </div>
                :
                <p>Fetching data...</p>
            }
        </>
    );
}

export default FacilityListVisitors;
