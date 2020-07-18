import React from 'react'
import './StatsPageMainStats.css'
import NumberFormat from 'react-number-format';

function StatsPageMainStats(props) {
    return (
        <>
        <div className='stats-main-container'>
            <div>
                <p>Total tests</p>
                <NumberFormat 
                    value={props.statistics.totalTestResults} 
                    thousandSeparator={true} 
                    displayType={'text'}
                />
            </div>
            <div>
                <p>Total Positive</p>
                <NumberFormat 
                    value={props.statistics.positive}
                    thousandSeparator={true} 
                    displayType={'text'}
                />
            </div>
            <div>
                <p>Total Deaths</p>
                <NumberFormat 
                    value={props.statistics.death}
                    thousandSeparator={true} 
                    displayType={'text'}
                />
            </div>
        </div>
        </>
    );
}

export default StatsPageMainStats;