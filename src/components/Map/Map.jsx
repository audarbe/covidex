import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'

class Map extends Component {
    statesCustomConfig = () => {
        let stateFill = this.props.stateStatistics.reduce((acc, s) => {
            let fillColor = {fill: this.getFillColor(s.positiveIncrease)}
            return {...acc, [s.state]: fillColor}
        },{})
        return stateFill;
    };

    getFillColor = (val) => {
        switch (true) {
        case val > 10000:
            console.log('true')
            return '#C0392B';
        case val > 7500:
            return '#D35400';
        case val > 5000:
            return '#E67E22';
        case val > 2500:
            return '#F39C12';
        case val > 1000:
            return '#F1C40F';
        case val === 0:
            return '#A9DFBF';
        default:
            return '#D7DBDD';
        }
    }

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