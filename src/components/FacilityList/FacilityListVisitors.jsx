import React, { Component } from 'react';
import './FacilityList.css';
import { getStateName } from '../../utils/utilities';
import FacilityListItem from '../FacilityListItem/FacilityListItem';

class FacilityListVisitors extends Component {
    render(props) {
        let filteredStates = this.props.currentChoice === 'US' ?
            <div>
                {this.props.facilities.map(facility => {
                    return (
                        <FacilityListItem
                            facility={facility}
                            user={this.props.user}
                            key={facility._id}
                            handleDeleteFacility={this.props.handleDeleteFacility}
                            handleEditFacility={this.props.handleEditFacility}
                        />
                    )
                }
                )}
            </div>
            :
            <div>
                {this.props.facilities
                    .filter(facility => facility.state === this.props.currentChoice)
                    .map(facility => {
                        return (
                            <FacilityListItem
                                facility={facility}
                                user={this.props.user}
                                key={facility._id}
                            />
                        )
                    }
                    )}
            </div>

        return (
            <>
                <h2>{getStateName(this.props.currentChoice).toUpperCase()} TESTING FACILITIES</h2>
                {this.props.facilities.length > 0 ?
                    <div>
                        {filteredStates}
                    </div>
                    :
                    <p>Fetching data...</p>
                }
            </>
        );
    }
}

export default FacilityListVisitors;
