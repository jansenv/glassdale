let criminals = []

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