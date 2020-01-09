import { useCriminals, getCriminalsByOfficer } from "./CriminalProvider.js";
import CriminalComponent from "./CriminalComponent.js";

// Declare event hub
const eventHub = document.querySelector(".container");

// Create Criminal List Component
const CriminalListComponent = () => {
  console.log("***I am the criminal list component***");
  const contentTarget = document.querySelector(".criminalsContainer");
  const CriminalsCollection = useCriminals();

  eventHub.addEventListener("filterClicked", event => {
    const crimeName = event.detail.crime
    const officerName = event.detail.officer

    const filteredCriminals = CriminalsCollection.filter(
      (individualCriminal) => {
        if (individualCriminal.conviction === crimeName) {
          return individualCriminal
        }
      }
    )
    .filter(criminal => {
      if (criminal.arrestingOfficer === officerName) {
        return criminal
      }
    })

    render(filteredCriminals)
  })

  // eventHub.addEventListener("officerSelected", event => {
  //     if ("officerName" in event.detail) {
  //       if (event.detail.officerName === "0") {
  //         render(CriminalsCollection)
  //       } else {
  //         const filteredCriminals = getCriminalsByOfficer(event.detail.officerName)
  //         render(filteredCriminals)
  //       }
  //     }
  // })

  // When 'associate alibis' is clicked, broadcast a message to pop up a dialog box (dialog.js)
  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {
      // Capture both 'associates' and id number in a single declaration
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