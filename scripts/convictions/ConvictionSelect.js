
/*
*      ConvictionSelect component that renders a select HTML element
*      which lists all convictions in the Glassdale PD API
*/

import { useConvictions } from "./ConvictionProvider.js"

 // Get a reference to the DOM element where the <select> will be rendered
 const eventHub = document.querySelector(".container")
 const contentTarget = document.querySelector(".filters__crime")

 const ConvictionSelect = () => {
     console.log("I am the select component")
     // Get all convictions from application state
     const convictions = useConvictions()

     eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {
            const selectedCrime = changeEvent.target.value

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crimeID: selectedCrime
                }
            })

            eventHub.dispatchEvent(message)
        }
     })

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