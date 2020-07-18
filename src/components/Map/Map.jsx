import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'
import { Redirect } from 'react-router-dom';

class Map extends Component {
    statesCustomConfig = () => {
        let stateFill = this.props.stateStatistics.reduce((acc, s) => {
            let stateName = s.state
            let fillColor = {fill: 'blue'}
            return {...acc, [stateName]: fillColor}
        },{})
        return stateFill;
    };

// helper function with switch statement for color fills

    render() {
        return (
            <div className="USAmap">
                <USAMap 
                    customize={this.statesCustomConfig()}
                    onClick={(event) => this.props.handleMapClick(event.target.dataset.name)}
                />
            </div>
        );
    }
}

export default Map;