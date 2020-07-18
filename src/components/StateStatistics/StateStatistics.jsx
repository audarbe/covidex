import React from 'react'

function StateStatistics(props) {
    let items = 'loading...'
    items =
        props.stateStatistics
            .slice(0, 20)
            .map((s, idx) =>
                <tr key={s.state}>
                    <td>{idx + 1}</td>
                    <td>{s.state}</td>
                    <td>{s.positiveIncrease}</td>
                </tr>
            )
    return (
        <>
            <p>State Statistics here</p>
            <table>
                <tbody>
                    {items}
                </tbody>
            </table>
        </>
    )
}

export default StateStatistics;