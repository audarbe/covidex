export function getStatistics(currentChoice) {
    if (currentChoice === 'US') {
        return (
            fetch(`https://api.covidtracking.com/v1/us/current.csv`, { mode: 'cors' }).then(res => res.json())
        );
    } else {
        return (
            fetch(`https://api.covidtracking.com/v1/states/${currentChoice.toLowerCase()}/current.json`, { mode: 'cors' }).then(res => res.json())
        );
    }
}

export function getStateStatistics() {
    return (
        fetch(`https://api.covidtracking.com/v1/states/current.csv`, { mode: 'cors' }).then(res => res.json())
    );
}