import { useNotes, getNotes, deleteNote } from "./NoteDataProvider.js"

const contentTarget = document.querySelector(".notesContainers")
const eventHub = document.querySelector(".container")

const NotesListComponent = () => {

    eventHub.addEventListener("showNoteButtonClicked", event => {
        const AllTheNotes = useNotes()
        render (AllTheNotes)
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
    })

    const render = (notesCollection) => {
        contentTarget.innerHTML = notesCollection.map(
            (individualNote) => {
                return `
                    <h2>Cold Case Notes</h2>
                    <section class="note">
                        <div>${individualNote.suspect}</div>
                        <div>${individualNote.text}</div>
                        <div>${individualNote.date}</div>
                        <button id="deleteNote--${individualNote.id}">Delete</button>
                    </section>
                `
            }
        ).join("")
    }
}

export default NotesListComponent