// Target the element to be manipulated
const contentTarget = document.querySelector(".noteFormContainer")

// Create Component
const NoteFormComponent = () => {

    // Declare function to render the component to the DOM
    const render = () => {
        contentTarget.innerHTML = `
        <input type="text" id="note-text"></input>
        <input type="text" id="note-suspect"></input>
        <input type="date" id="note-date"></input>
        <button id="saveNote">Save Note</button>
        `
    }

    render()
}

// Export component
export default NoteFormComponent