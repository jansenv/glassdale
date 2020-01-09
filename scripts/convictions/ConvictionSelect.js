
/*
*      ConvictionSelect component that renders a select HTML element
*      which lists all convictions in the Glassdale PD API
*/

import { useConvictions } from "./ConvictionProvider.js"

 // Get a reference to the DOM element where the <select> will be rendered
 const contentTarget = document.querySelector(".filters__crime")
 const eventHub = document.querySelector(".container")

 const ConvictionSelect = () => {
     console.log("I am the select component")
     // Get all convictions from application state
     const convictions = useConvictions()

     //Target the crime selected by the user
     eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.id === "crimeSelect") {
            const selectedCrime = changeEvent.target.value

            //Create a custom event to store the crime selected
            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crimeID: selectedCrime
                }
            })

            //Dispatch the message to the event hub
            eventHub.dispatchEvent(message)
        }
     })

     //Render the dropdown box to the DOM
     const render = convictionsCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(conviction => 
                    `<option>${conviction}</option>`
                    )
                }
            </select>
        `
     }

     render(convictions);
 }

 export default ConvictionSelect