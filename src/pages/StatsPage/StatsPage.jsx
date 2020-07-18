import React, { Component } from 'react';
import Map from "../../components/Map/Map";
import FacilityListVisitors from '../../components/FacilityList/FacilityListVisitors'
import StateStatistics from '../../components/StateStatistics/StateStatistics';
import StatsPageMainStats from '../../components/StatsPageMainStats/StatsPageMainStats';


class StatsPage extends Component {
    render() {
        return (
            <>
                <h1>{this.props.currentChoice} STATISTICS</h1>
                <button onClick={() => this.props.handleMapClick('US')}>View US Stats</button>
                <Map 
                    handleMapClick={this.props.handleMapClick}
                />
                <StatsPageMainStats 
                    statistics={this.props.statistics}
                />
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