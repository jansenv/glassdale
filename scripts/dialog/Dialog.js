import { useCriminals } from "../criminals/CriminalProvider.js";

// Declare event hub
const eventHub = document.querySelector(".container");

// Target container where alibi text will be rendered
const contentTarget = document.querySelector(".alibiContainer");

// Create dialog component
const DialogComponent = () => {

    // Listen on event hub for when 'associates alibi' button is clicked (sent from criminal list component)
    eventHub.addEventListener("associatesButtonClicked", event => {

        // Get criminal data
        const criminals = useCriminals()
        console.log(event.detail.criminalId)

        /**
         * I've got all the criminals. I've got the id
         * of the criminal that was clicked.
         *
         * How does me get the full criminal object from the array?
         */
        
         // Return the first criminal found that matches the ID clicked
        const foundCriminal = criminals.find(
            (singleCriminal) => {
            // event.detail.crimeID is currently a string. Change it to a number
              return singleCriminal.id === parseInt(event.detail.criminalId, 10)
            }
        )

        // Extract text from criminal provider and iterate through it, rendering it on the DOM
        const alibisHTML = foundCriminal.known_associates.map(
            (singleAssociate) => {
                return `
                    <div>
                        ${singleAssociate.name}: ${singleAssociate.alibi}
                    </div>
                `
            }
        ).join("")

        // Put the alibis text inside the .alibi__div
        document.querySelector(".alibi__text").innerHTML = alibisHTML
        
        // Display the dialog box
        document.querySelector(".alibis").showModal()

    })

    // Function to render the HTML
    const render = () => {
        contentTarget.innerHTML = `
        <dialog class="alibis">
        <div class="alibi__text"></div>
        <button id="closeDialog"></button>
    </dialog>
    `
    }

    // Render the HTML
    render()
}

export default DialogComponent