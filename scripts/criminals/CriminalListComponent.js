import { useCriminals } from "./CriminalProvider.js";
import CriminalComponent from "./CriminalComponent.js";

const eventHub = document.querySelector(".container");

const CriminalListComponent = () => {
  console.log("***I am the list component***");
  const criminalHTML = document.querySelector(".criminalsContainer");
  const CriminalsCollection = useCriminals();

  eventHub.addEventListener("crimeSelected", event => {
      const matchingCriminals = CriminalsCollection.filter(currentCriminals => {
        if (currentCriminals.conviction === event.detail.crimeID)
        return currentCriminals
      })
      render(matchingCriminals);
    })

  let render = CriminalsCollection => {
    criminalHTML.innerHTML = `
    ${CriminalsCollection.map(criminal => CriminalComponent(criminal)).join("")}
    `;
  };
};

export default CriminalListComponent;