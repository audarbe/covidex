import React, { Component} from 'react';
import './StatsPageHeader.css'
import { getStateName, getCurrentDate } from '../../utils/utilities';

class StatsPageHeader extends Component {
    render() {
        return (
            <div className="stats-header">
                <h1>{getStateName(this.props.currentChoice).toUpperCase()} STATISTICS</h1>
                <p className="label">As of {getCurrentDate()}</p>
            </div>
        )
    }
}

export default StatsPageHeader;