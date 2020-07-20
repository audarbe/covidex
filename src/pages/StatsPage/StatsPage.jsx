import React, { Component } from 'react';
import './StatsPage.css'
import Map from "../../components/Map/Map";
import FacilityListVisitors from '../../components/FacilityList/FacilityListVisitors'
import StateStatistics from '../../components/StateStatistics/StateStatistics';
import StatsPageMainStats from '../../components/StatsPageMainStats/StatsPageMainStats';
import StatsPageHeader from '../../components/StatsPageHeader/StatsPageHeader';

class StatsPage extends Component {
    render() {
        return (
            <>
                <StatsPageHeader
                    currentChoice={this.props.currentChoice}
                    className="stats-header"
                />
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
                <div className="secondary-stats-row">
                    <div className="secondary-stats-left">
                        <FacilityListVisitors
                            facilities={this.props.facilities}
                            currentChoice={this.props.currentChoice}
                            user={this.props.user}
                            handleDeleteFacility={this.props.handleDeleteFacility}
                            handleEditFacility={this.props.handleEditFacility}
                        />
                    </div>
                    <div className="flex-gap"></div>
                    <div className="secondary-stats-right">
                        <StateStatistics
                            stateStatistics={this.props.stateStatistics}
                            currentSort={this.props.currentSort}
                            filterStateData={this.props.filterStateData}
                            handleMapClick={this.props.handleMapClick}
                            currentChoice={this.props.currentChoice}
                        />
                    </div>
                </div>
            </>
        );
    }
}

export default StatsPage;