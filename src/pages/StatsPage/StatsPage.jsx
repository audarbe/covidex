import React, { Component } from 'react';
import Map from "../../components/Map/Map";
import FacilityListVisitors from '../../components/FacilityList/FacilityListVisitors'
import StateStatistics from '../../components/StateStatistics/StateStatistics';
import StatsPageMainStats from '../../components/StatsPageMainStats/StatsPageMainStats';


class StatsPage extends Component {
    render() {
        return (
            <>
                <Map 
                    handleMapClick={this.props.handleMapClick}
                    stateStatistics={this.props.stateStatistics}
                    currentMapFilter={this.props.currentMapFilter}
                    handleMapFilter={this.props.handleMapFilter}
                    currentChoice={this.props.currentChoice}
                />
                <StatsPageMainStats 
                    statistics={this.props.statistics}
                    currentMapFilter={this.props.currentMapFilter}
                    handleMapFilter={this.props.handleMapFilter}
                    currentChoice={this.props.currentChoice}
                    handleMapClick={this.props.handleMapClick}
                />
                <div className="row">
                    <div className="left-8">
                        <FacilityListVisitors 
                            facilities={this.props.facilities}
                            currentChoice={this.props.currentChoice}
                        />
                    </div>
                    <div className="right-4">
                        <StateStatistics 
                            stateStatistics={this.props.stateStatistics}
                            currentSort={this.props.currentSort}
                            filterStateData={this.props.filterStateData}
                            handleMapClick={this.props.handleMapClick}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default StatsPage;