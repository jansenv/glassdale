import { useNotes, getNotes, deleteNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".notesContainers")
const eventHub = document.querySelector(".container")

const NotesListComponent = () => {

    eventHub.addEventListener("noteHasBeenEdited", event => {
        const updatedNotes = useNotes()
        render(updatedNotes)
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("deleteNote--")) {
            const [prefix, id] = clickEvent.target.id.split("--")
            deleteNote(id).then(
                () => {
                    const updatedNotes = useNotes()
                    render(updatedNotes)
                }
            )
        }

        if (clickEvent.target.id.startsWith("editNote--")) {
            const [deletePrefix, noteId] = clickEvent.target.id.split("--")

            const editEvent = new CustomEvent("editButtonClicked", {
                detail: {
                    noteId: noteId
                }
            })

            eventHub.dispatchEvent(editEvent)
        }
    })

    const renderNotesAgain = () => {
        const allTheNotes = useNotes()
        render(allTheNotes)

    }

    eventHub.addEventListener("noteCreated", event => {
        renderNotesAgain()
    })

    eventHub.addEventListener("showNoteButtonClicked", event => {
        renderNotesAgain()
    })

    const render = (notesCollection) => {
        contentTarget.innerHTML = notesCollection.map(
            (individualNote) => {
                return `
                    <section class="note">
                        <div>${individualNote.suspect}</div>
                        <div>${individualNote.text}</div>
                        <div>
                            ${new Date(individualNote.date).toLocaleDateString("us-en")}
                            ${new Date(individualNote.date).toLocaleTimeString("us-en")}
                        </div>
                        <button id="deleteNote--${individualNote.id}">Delete</button>
                        <button id="editNote--${individualNote.id}">Edit</button>
                    </section>
                `
            }
        ).join("")
    }
}

export default NotesListComponent