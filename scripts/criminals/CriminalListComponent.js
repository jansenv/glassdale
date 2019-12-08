import { useCriminals } from "./CriminalProvider.js";
import CriminalComponent from "./CriminalComponent.js";

const eventHub = document.querySelector(".container");

const CriminalListComponent = () => {
  console.log("***I am the list component***");
  const criminalHTML = document.querySelector(".criminalsContainer");
  const CriminalsCollection = useCriminals();

  eventHub.addEventListener("crimeSelected", event => {
    /*
    const selectedCrime = event.detail.crimeID;
    const matchingCriminals = CriminalsCollection.filter(currentCriminals => {
      if (currentCriminals.conviction === selectedCrime) {
        return currentCriminals;
      }
    });

    render(matchingCriminals)

    */

    
    if("crimeID" in event.detail) {
      const matchingCriminals = CriminalsCollection.filter(currentCriminals => {
        return currentCriminals.conviction
      })
      render(matchingCriminals);
    }
  
  });

  let render = CriminalsCollection => {
    criminalHTML.innerHTML = `
    ${CriminalsCollection.map(criminal => CriminalComponent(criminal)).join("")}
    `;
  };
};

export default CriminalListComponent;