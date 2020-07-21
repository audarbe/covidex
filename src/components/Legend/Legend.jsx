import React, { Component } from 'react'
import './Legend.css'

class Legend extends Component {
    render() {
        let legend =
        this.props.currentMapFilter === 'positive' ?
            <div className="legend">
                <p><i className="fas fa-circle" style={{color: '#B14433'}}></i>&nbsp;<span>{` 400,000 + `}</span></p>
                <p><i className="fas fa-circle" style={{color: '#993E30'}}></i>&nbsp;<span>{` 300,000 - 399,999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#81382D'}}></i>&nbsp;<span>{` 200,000 - 299,999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#69322A'}}></i>&nbsp;<span>{` 100,000 - 199,999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#502C26'}}></i>&nbsp;<span>{` 50,000 - 99,999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#382623'}}></i>&nbsp;<span>{` 10,000 - 49,999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#111111'}}></i>&nbsp;<span>{` 0 - 9,999`}</span></p>
            </div>
        : 
            <div className="legend">
                <p><i className="fas fa-circle" style={{color: '#B14433'}}></i>&nbsp;<span>{` 10,000 +`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#993E30'}}></i>&nbsp;<span>{` 7,500 - 9,999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#81382D'}}></i>&nbsp;<span>{` 5,000 - 7,499`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#69322A'}}></i>&nbsp;<span>{` 2,500 - 4,999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#502C26'}}></i>&nbsp;<span>{` 1,000 2,4999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#382623'}}></i>&nbsp;<span>{` 500 - 999`}</span></p>
                <p><i className="fas fa-circle" style={{color: '#111111'}}></i>&nbsp;<span>{` 0 - 499`}</span></p>
            </div>   

        return (
            <div className="legend-container">
            {this.props.currentChoice !== 'US' ?
                <div
                    className="us-stats-button"
                    onClick={() => this.props.handleMapClick('US')}>
                    <p><i className="fas fa-chevron-circle-left link-icon"></i>&nbsp;<span>View US heatmap</span></p>
                </div>
                :
                legend
            }
        </div>
        )
    }
}

export default Legend;