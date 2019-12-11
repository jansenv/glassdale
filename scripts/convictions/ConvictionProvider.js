// Declare variable for list of crimes to be stored in
let convictions = []

// Fetch the data for crimes
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

// Export the crimes data for use by other modules
export const useConvictions = () => convictions