import React, { Component } from 'react';
import './StatsPageMainStats.css'
import NumberFormat from 'react-number-format';

class StatsPageMainStats extends Component {
    render() {
        return (
            <>
                <div className="stats-main-container">
                    <div 
                        style={{borderTop: this.props.currentChoice === 'US' && this.props.currentMapFilter === 'positiveIncrease' ? '3px solid #3498DB' : '3px solid #333333'}}
                        className="stats-main-card"
                        onClick={() => this.props.handleMapFilter('positiveIncrease')}>
                        <p className="label">New Cases</p>
                        <p className ="main-stats-stat">
                            <NumberFormat
                                value={this.props.statistics.positiveIncrease}
                                thousandSeparator={true}
                                displayType={'text'}
                            />  
                        </p>
                    </div>
                    <div 
                        style={{borderTop: this.props.currentChoice === 'US' && this.props.currentMapFilter === 'positive' ? '3px solid #3498DB' : '3px solid #333333'}}
                        className="stats-main-card"
                        onClick={() => this.props.handleMapFilter('positive')}>
                        <p className="label">Total Positive</p>
                        <p className ="main-stats-stat">
                            <NumberFormat
                                value={this.props.statistics.positive}
                                thousandSeparator={true}
                                displayType={'text'}
                            />
                        </p>
                    </div>
                    <div 
                        style={{borderTop: this.props.currentChoice === 'US' && this.props.currentMapFilter === 'death' ? '3px solid #3498DB' : '3px solid #333333'}}
                        className="stats-main-card"
                        onClick={() => this.props.handleMapFilter('death')}>
                        <p className="label">Total Deaths</p>
                        <p className ="main-stats-stat">
                            <NumberFormat
                                value={this.props.statistics.death}
                                thousandSeparator={true}
                                displayType={'text'}
                            />
                        </p>
                    </div>
                </div>
                <button onClick={() => this.props.handleMapClick('US')}>View US Stats</button>
            </>
        );
    }
}

export default StatsPageMainStats;