let criminals = []

export const getCriminalsByCrime = crime => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.conviction.toLowerCase() === crime.toLowerCase()) {
            return true
        }
        return false
    })
}

export const getCriminalsByOfficer = officerName => {
    return criminals.filter(currentCriminal => {
        if (currentCriminal.arrestingOfficer.toLowerCase() === officerName.toLowerCase()) {
            return true
        }
        return false
    })
}

export const getCriminals = () => {

    console.log("I am going to fetch the criminals data")

    return fetch("http://criminals.glassdale.us/criminals", {
        method: "GET" //default
    })
        .then(response => response.json())
        .then(
            parsedCriminals => {
                console.log("***I have the criminals data***")
                criminals = parsedCriminals.slice()
            }
        )
}

export const useCriminals = () => criminals