let officers = []

export const useOfficers = () => {
    return officers
}

export const getOfficers = () => {
    return fetch("http://criminals.glassdale.us/officers", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
        .then(response => response.json())
        .then(
            parsedOfficers => {
                console.table(parsedOfficers)
                officers = parsedOfficers.slice()
            }
        )
}