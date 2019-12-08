let convictions = []

export const getConvictions = () => {

    console.log("I am going to fetch the convictions data")

    return fetch("http://criminals.glassdale.us/crimes", {
        method: "GET" //default
    })
        .then(response => response.json())
        .then(
            parsedConvictions => {
                console.log("***I have the convictions data***")
                convictions = parsedConvictions.slice()
            }
        )
}

export const useConvictions = () => convictions