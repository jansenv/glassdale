import { saveNote } from "./NoteDataProvider.js";

// Target the element to be manipulated
const contentTarget = document.querySelector(".noteFormContainer");

// Declare event hub
const eventHub = document.querySelector(".container");

// Create Component
const NoteFormComponent = () => {
  // Make function to render the component to the DOM
  const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="note-text"></input>
        <input type="text" id="note-suspect"></input>
        <input type="date" id="note-date"></input>
        <button id="saveNote">Save Note</button>
        `;
  };

  render();

  // Handle internal element click
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
      console.log("user saved a note!");

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
