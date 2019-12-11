// Create a variable for notes to be stored in
let notes = []

// Fetch the notes
export const getNotes = () => {

    console.log("***I am fetching the notes***")

    return fetch("http://localhost:3000/notes", {
        method: "GET"
    })
        .then(response => response.json())
        .then(
            parsedNotes => {
                console.log("***I have the notes***")
                notes = parsedNotes.slice()
            }
        )
}

// Export the notes to be used
export const useNotes = () => {
    return notes
}


// Make a function that will save notes to json file
export const saveNote = note => {

    console.log("***I am saving the note***")

    fetch("http://localhost:3000/notes", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    
    .then(getNotes)
}