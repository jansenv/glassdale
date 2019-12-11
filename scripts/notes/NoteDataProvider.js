let notes = []

export const getNotes = () => {

    console.log("***I am fetching the notes***")

    return fetch("http://localhost:8080/notes", {
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

export const useCriminals = () => criminals

export const saveNote = note => {

    console.log("***I am saving the note***")

    fetch('http://localhost:8080/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}