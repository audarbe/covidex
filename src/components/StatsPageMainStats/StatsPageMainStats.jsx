import React, { Component } from 'react';
import './StatsPageMainStats.css'
import NumberFormat from 'react-number-format';
import { getStateName } from '../../utils/utilities';

class StatsPageMainStats extends Component {
    render() {
        return (
            <>
                <h1>{getStateName(this.props.currentChoice).toUpperCase()} STATISTICS</h1>
                <div className="stats-main-container">
                    <div 
                        className="stats-main-card"
                        onClick={() => this.props.handleMapFilter('positiveIncrease')}>
                        <h5>New Cases</h5>
                        <NumberFormat
                            value={this.props.statistics.positiveIncrease}
                            thousandSeparator={true}
                            displayType={'text'}
                        />
                    </div>
                    <div 
                        className="stats-main-card"
                        onClick={() => this.props.handleMapFilter('positive')}>
                        <h5>Total Positive</h5>
                        <NumberFormat
                            value={this.props.statistics.positive}
                            thousandSeparator={true}
                            displayType={'text'}
                        />
                    </div>
                    <div 
                        className="stats-main-card"
                        onClick={() => this.props.handleMapFilter('death')}>
                        <h5>Total Deaths</h5>
                        <NumberFormat
                            value={this.props.statistics.death}
                            thousandSeparator={true}
                            displayType={'text'}
                        />
                    </div>
                </div>
                <button onClick={() => this.props.handleMapClick('US')}>View US Stats</button>
            </>
        );
    }
}

export default StatsPageMainStats;