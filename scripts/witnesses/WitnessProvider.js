let witnesses = []

export const getWitnesses = () => {

    console.log("I am fetching the witnesses data")

    return fetch("http://criminals.glassdale.us/witnesses", {
        method: "GET" //default
    })
        .then(response => response.json())
        .then(
            parsedWitnesses => {
                console.log("***I have the witnesses data***")
                witnesses = parsedWitnesses.slice()
            }
        )
}

export const useWitnesses = () => witnesses