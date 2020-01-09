import { saveNote, useNotes, editNote } from "./NoteDataProvider.js";

// Target the element to be manipulated
const contentTarget = document.querySelector(".noteFormContainer");

// Declare event hub
const eventHub = document.querySelector(".container");

eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "showNotes") {
      const message = new CustomEvent("showNoteButtonClicked")
      eventHub.dispatchEvent(message)
  }
})

// Handle internal element click
eventHub.addEventListener("click", clickEvent => {
  if (clickEvent.target.id === "saveNote") {
    // Does the hidden input field have a value?
    const hiddenInputValue = document.querySelector('#note-id').value

    // If so, edit the note with a PUT operation
    if (hiddenInputValue !== "") {
      const editedNote = {
        id: parseInt(document.querySelector("#note-id").value, 10),
        text: document.querySelector("#note-text").value,
        suspect: document.querySelector("#note-suspect").value,
        date: Date.now()
      }

      editNote(editedNote).then(() => {
        eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
      })
    } else {
      // Else, save the notes with a POST operation
      const newNote = {
        text: document.querySelector("#note-text").value,
        suspect: document.querySelector("#note-suspect").value,
        date: Date.now()
      }
      
      saveNote(newNote).then(
        () => {
          const message = new CustomEvent("noteCreated")
          eventHub.dispatchEvent(message)
        }
      )
    }
  }
});

eventHub.addEventListener("editButtonClicked", event => {
  const noteToBeEdited = event.detail.noteId
  const allNotesArray = useNotes()
  const theFoundNote = allNotesArray.find(
    (currentNoteObject) => {
      return currentNoteObject.id === parseInt(noteToBeEdited, 10)
    }
  )

  document.querySelector("#note-id").value = theFoundNote.id
  document.querySelector("#note-text").value = theFoundNote.text
  document.querySelector("#note-suspect").value = theFoundNote.suspect
})

const NoteFormComponent = () => {
  // Make function to render the component to the DOM
  const render = () => {
    contentTarget.innerHTML = `
        <details>
          <summary>Case Notes</summary>

          <input type="hidden" id="note-id" />

          <div class="note__field">
              Note: <input type="text" id="note-text" />
          </div>

          <div class="note__field">
              Criminal: <input type="text" id="note-suspect" />
          </div>

          <button class="note__field" id="saveNote">Save Note</button>
          <button class="note__field" id="showNotes">Show Notes</button>
        </details>
        `;
  };

  render();


};

// Export component
export default NoteFormComponent;