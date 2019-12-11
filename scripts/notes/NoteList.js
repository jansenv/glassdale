import { saveNote } from "./NoteDataProvider.js"

const SaveNoteComponent = () => {

    // Declare event hub
    const eventHub = document.querySelector(".container")

    
    // Handle internal element click
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {

            console.log("user saved a note!")

            // Make a new object representation of a note
            const newNote = {
                "text": "user input",
                "date": "user input",
                "suspect": "user input"
            }

            // Change API state and application state
            saveNote(newNote)
        }
    })
}

export default SaveNoteComponent