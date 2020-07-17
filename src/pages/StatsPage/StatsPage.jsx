import React, { Component } from 'react';
import Map from "../../components/Map/Map";
import FacilityListVisitors from '../../components/FacilityList/FacilityListVisitors'

class StatsPage extends Component {
    render() {
        return (
            <>
                <h1>{this.props.currentChoice} STATISTICS</h1>
                <Map 
                    handleMapClick={this.props.handleMapClick}
                />
                <button onClick={() => this.props.handleMapClick('US')}>US Stats</button>
                <FacilityListVisitors 
                    facilities={this.props.facilities}
                    currentChoice={this.props.currentChoice}
                />
            </>
        );
    }
}


export default StatsPage;