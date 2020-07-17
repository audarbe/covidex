import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'

class Map extends Component {
    statesCustomConfig = () => {
        return {
            "NJ": {
                fill: "navy",
            },
            "NY": {
                fill: "#CC0000"
            }
        };
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