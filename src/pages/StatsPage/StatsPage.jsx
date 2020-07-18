import React, { Component } from 'react';
import Map from "../../components/Map/Map";
import FacilityListVisitors from '../../components/FacilityList/FacilityListVisitors'
import StateStatistics from '../../components/StateStatistics/StateStatistics';

class StatsPage extends Component {
    render() {
        return (
            <>
                <h1>{this.props.currentChoice} STATISTICS</h1>
                <Map 
                    handleMapClick={this.props.handleMapClick}
                />
                <button onClick={() => this.props.handleMapClick('US')}>US Stats</button>
                <p>As of: {this.props.statistics.date}</p>
                <p>Total tests: {this.props.statistics.totalTestResults}</p>
                <p>Positive: {this.props.statistics.positive}</p>
                <p>Deaths: {this.props.statistics.death}</p>
                <FacilityListVisitors 
                    facilities={this.props.facilities}
                    currentChoice={this.props.currentChoice}
                />
                <StateStatistics 
                    stateStatistics={this.props.stateStatistics}
                    currentSort={this.props.currentSort}
                    filterStateData={this.props.filterStateData}
                    handleMapClick={this.props.handleMapClick}
                />
            </>
        );
    }
}

export default StatsPage;