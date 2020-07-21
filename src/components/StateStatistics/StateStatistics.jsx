import React, { Component } from 'react'
import './StateStatistics.css'
import NumberFormat from 'react-number-format';
import { getStateName } from '../../utils/utilities';

class StateStatistics extends Component {
    render() {
        let items =
            this.props.stateStatistics
                .slice(0, 25)
                .map((s, idx) =>
                    <tr className="stats-table-row"
                        key={s.state}
                        style={{ backgroundColor: s.state === this.props.currentChoice ? '#3498DB' : '' }}
                        onClick={() => this.props.handleMapClick(s.state)}>
                        <td className="stats-table-rank">#{idx + 1}</td>
                        <td className="stats-table-state">{getStateName(s.state)}</td>
                        <td className="stats-table-stat">
                            <NumberFormat
                                value={s[this.props.currentSort]}
                                thousandSeparator={true}
                                displayType={'text'}
                            />
                        </td>
                    </tr>
                )

        return (
            <>
                <h2>STATE RANKINGS</h2>
                <div className="ranking-container">
                    <form>
                        <select
                            className="rankings-filter-select"
                            onChange={(e) => this.props.filterStateData(e.target.value)}>
                            <option value="positiveIncrease" defaultValue>New daily cases</option>
                            <option value="death">Total deaths</option>
                            <option value="deathIncrease">New daily deaths</option>
                            <option value="hospitalizedCurrently">Currently hospitalized</option>
                            <option value="totalTestResults">Tests taken</option>
                            <option value="positive">Tested positive</option>
                            <option value="negative">Tested negative</option>
                        </select>
                    </form>
                    <table>
                        <tbody>
                            {items}
                        </tbody>
                    </table>
                </div>
            </>
        )
    }

}

export default StateStatistics;


