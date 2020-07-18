import React, { Component } from 'react';
import './StatsPageMainStats.css'
import NumberFormat from 'react-number-format';
import { getStateName } from '../../utils/utilities';

class StatsPageMainStats extends Component {
    render() {
        return (
            <>
                <h1>{getStateName(this.props.currentChoice).toUpperCase()} STATISTICS</h1>
                <div className='stats-main-container'>
                    <div onClick={() => this.props.handleMapFilter('positiveIncrease')}>
                        <p>New Cases</p>
                        <NumberFormat
                            value={this.props.statistics.positiveIncrease}
                            thousandSeparator={true}
                            displayType={'text'}
                        />
                    </div>
                    <div onClick={() => this.props.handleMapFilter('positive')}>
                        <p>Total Positive</p>
                        <NumberFormat
                            value={this.props.statistics.positive}
                            thousandSeparator={true}
                            displayType={'text'}
                        />
                    </div>
                    <div onClick={() => this.props.handleMapFilter('death')}>
                        <p>Total Deaths</p>
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