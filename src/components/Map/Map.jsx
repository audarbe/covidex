import React, { Component } from 'react';
import USAMap from "react-usa-map";
import './Map.css'

class Map extends Component {
    mapHandler = (event) => {
        alert(event.target.dataset.name);
    };

    statesCustomConfig = () => {
        return {
            "NJ": {
                fill: "navy",
                clickHandler: (event) =>
                    console.log('Custom handler for NJ', event.target.dataset)
            },
            "NY": {
                fill: "#CC0000"
            }
        };
    };

    render() {
        return (
            <div className="USAmap">
                <USAMap 
                    customize={this.statesCustomConfig()}
                    onClick={this.mapHandler} 
                />
            </div>
        );
    }
}


export default Map;