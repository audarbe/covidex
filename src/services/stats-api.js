export function getStatistics(currentChoice) {
    if (currentChoice === 'US') {
        return (
            fetch(`https://covidtracking.com/api/v1/us/current.json`, {mode: 'cors'}).then(res => res.json())
        );
    } else {
        return (
            fetch(`https://covidtracking.com/api/v1/states/${currentChoice.toLowerCase()}/current.json`, {mode: 'cors'}).then(res => res.json())
        );
    }
}