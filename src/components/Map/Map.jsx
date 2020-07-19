import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'

class Map extends Component {
    statesCustomConfig = () => {
        if (this.props.currentChoice === 'US') {
            let stateFill = this.props.stateStatistics.reduce((acc, s) => {
                let fillColor = { fill: this.getFillColor(s[this.props.currentMapFilter]) }
                return { ...acc, [s.state]: fillColor }
            }, {})
            return stateFill;
        } else {
            return { [this.props.currentChoice]: { fill: '#3498DB' } }
        }
    };

    getFillColor = (val) => {
        if (this.props.currentMapFilter === 'positive') {
            switch (true) {
                case val > 400000:
                    return '#B14433';
                case val > 300000:
                    return '#993E30';
                case val > 200000:
                    return '#81382D';
                case val > 100000:
                    return '#69322A';
                case val > 50000:
                    return '#502C26';
                case val > 10000:
                    return '#382623';
                default:
                    return '#111111';
            }
        } else {
            switch (true) {
                case val > 10000:
                    return '#B14433';
                case val > 7500:
                    return '#993E30';
                case val > 5000:
                    return '#81382D';
                case val > 2500:
                    return '#69322A';
                case val > 1000:
                    return '#502C26';
                case val > 500:
                    return '#382623';
                default:
                    return '#111111';
            }
        }
    }

    render() {
        return (
                <div className="USAmap">
                    <USAMap
                        className="uk-align-center"
                        title=""
                        defaultFill="#202020"
                        customize={this.statesCustomConfig()}
                        onClick={(event) => this.props.handleMapClick(event.target.dataset.name)}
                    />
                    { this.props.currentChoice !== 'US' ?
                        <div 
                            className="us-stats-button"
                            onClick={() => this.props.handleMapClick('US')}>
                                <p><i class="fas fa-chevron-circle-left back-icon"></i> <span>View US heatmap</span></p>
                        </div>
                    :
                    ''
                    }
                </div>
        );
    }
}

export default Map;