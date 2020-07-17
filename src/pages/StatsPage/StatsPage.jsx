import React, { Component } from 'react';
import Map from "../../components/Map/Map";
import FacilityListVisitors from '../../components/FacilityList/FacilityListVisitors'

const US = 'test'

class StatsPage extends Component {
    render() {
        return (
            <>
                <h1>{this.props.currentChoice} STATISTICS</h1>
                <Map 
                    handleMapClick={this.props.handleMapClick}
                />
                <button onClick={() => this.props.handleMapClick('US')}>US Stats</button>
                <p>date: {this.props.statistics.positive}</p>
                <FacilityListVisitors 
                    facilities={this.props.facilities}
                    currentChoice={this.props.currentChoice}
                />
            </>
        );
    }
}


export default StatsPage;