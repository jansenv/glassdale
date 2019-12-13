import { saveNote } from "./NoteDataProvider.js";

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

// Create Component
const NoteFormComponent = () => {
  // Make function to render the component to the DOM
  const render = () => {
    contentTarget.innerHTML = `
        <details>
          <summary>Case Notes</summary>
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


  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

      // Make a new object representation of a note
      const newNote = {
        text: document.querySelector("#note-text").value,
        suspect: document.querySelector("#note-suspect").value,
        date: Date.now()
      };

      // Change API state and application state
      saveNote(newNote)
    }
  });
};

// Export component
export default NoteFormComponent;