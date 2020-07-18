import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'

class Map extends Component {
    statesCustomConfig = () => {
        let stateFill = this.props.stateStatistics.reduce((acc, s) => {
            let fillColor = { fill: this.getFillColor(s[this.props.currentMapFilter]) }
            return { ...acc, [s.state]: fillColor }
        }, {})
        return stateFill;
    };

    getFillColor = (val) => {
        if (this.props.currentMapFilter === 'positiveIncrease') {
            switch (true) {
                case val > 10000:
                    return '#C0392B';
                case val > 7500:
                    return '#E74C3C';
                case val > 5000:
                    return '#DC7633';
                case val > 2500:
                    return '#E67E22';
                case val > 1000:
                    return '#F5B041';
                case val > 500:
                    return '#F7DC6F';
                default:
                    return '#D0D3D4';
            }
        } else if (this.props.currentMapFilter === 'positive') {
            switch (true) {
                case val > 400000:
                    return '#C0392B';
                case val > 300000:
                    return '#E74C3C';
                case val > 200000:
                    return '#DC7633';
                case val > 100000:
                    return '#E67E22';
                case val > 50000:
                    return '#F5B041';
                case val > 10000:
                    return '#F7DC6F';
                default:
                    return '#D0D3D4';
            }
        } else {
            switch (true) {
                case val > 10000:
                    return '#C0392B';
                case val > 7500:
                    return '#E74C3C';
                case val > 5000:
                    return '#DC7633';
                case val > 2500:
                    return '#E67E22';
                case val > 1000:
                    return '#F5B041';
                case val > 500:
                    return '#F7DC6F';
                default:
                    return '#D0D3D4';
            }
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