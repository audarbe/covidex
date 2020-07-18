import React from 'react'

function StateStatistics(props) {
    let items = 'loading...'
    items =
        props.stateStatistics
            .slice(0, 20)
            .map((s, idx) =>
                <tr key={s.state} onClick={() => props.handleMapClick(s.state)}>
                    <td>{idx + 1}</td>
                    <td>{s.state}</td>
                    <td>{s[props.currentSort]}</td>
                </tr>
            )
    return (
        <>
            <p>State Rankings</p>
            <form>
                <select onChange={(e) => props.filterStateData(e.target.value)}>
                    <option value="positiveIncrease" defaultValue>New Cases (1-Day)</option>
                    <option value="deathConfirmed">Deaths</option>
                    <option value="deathIncrease">New deaths (1-day)</option>
                    <option value="hospitalizedCurrently">Currently hospitalized</option>
                    <option value="totalTestResults">Tests taken</option>
                    <option value="positive">Tested positive</option>
                    <option value="negative">Tested negative</option>
                    <option value="inIcuCurrently">Currently in ICU</option>
                </select>
            </form>
            <table>
                <tbody>
                    {items}
                </tbody>
            </table>
        </>
    )
}

export default StateStatistics;


