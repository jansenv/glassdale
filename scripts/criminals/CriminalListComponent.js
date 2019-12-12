import { useCriminals } from "./CriminalProvider.js";
import CriminalComponent from "./CriminalComponent.js";

// Declare event hub
const eventHub = document.querySelector(".container");

// Create Criminal List Component
const CriminalListComponent = () => {
  console.log("***I am the list component***");
  const contentTarget = document.querySelector(".criminalsContainer");
  const CriminalsCollection = useCriminals();

  // Listen for the crimeSelected custom event from ConvictionSelect.js
  eventHub.addEventListener("crimeSelected", event => {
      const matchingCriminals = CriminalsCollection.filter(currentCriminals => {
        if (currentCriminals.conviction === event.detail.crimeID)
        return currentCriminals
      })
      render(matchingCriminals);
    })

  // When 'associate alibis' is clicked, broadcast a message to pop up a dialog box (dialog.js)
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
      // Capture both 'associates' and # in a single declaration
      const [prefix, id] = clickEvent.target.id.split("--")
      // Create custom event for message
      const message = new CustomEvent("associatesButtonClicked", {
        detail: {
          criminalId: id
        }
      })
      eventHub.dispatchEvent(message)
    }
  })

  // Render the array of criminals to the DOM
  let render = CriminalsCollection => {
    contentTarget.innerHTML = `
    ${CriminalsCollection.map(criminal => CriminalComponent(criminal)).join("")}
    `;
  };
};

export default CriminalListComponent;