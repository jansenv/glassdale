import { useWitnesses } from "./WitnessProvider.js";
import WitnessComponent from "./WitnessComponent.js";

const eventHub = document.querySelector(".container")

const WitnessListComponent = () => {

  const contentTarget = document.querySelector(".WitnessContainer");
  const WitnessCollection = useWitnesses();

  const render = () => {
    contentTarget.innerHTML = `
    ${WitnessCollection.map(currentWitness => {
      return WitnessComponent(currentWitness);
    }).join("")}
    `;
  };

  eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "WitnessButton") {
      render();
    }
  })
};

export default WitnessListComponent;