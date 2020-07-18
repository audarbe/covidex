import React, { Component } from 'react';
import './StatsPageMainStats.css'
import NumberFormat from 'react-number-format';

class StatsPageMainStats extends Component {
    render() {
        return (
            <>
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
            </>
        );
    }
}

export default StatsPageMainStats;