import { useWitnesses } from "./WitnessProvider.js"
import WitnessComponent from "./WitnessComponent.js"

const WitnessListComponent = () => {

    // Get a reference to the container the data will be stored in
    const contentElement = document.querySelector(".witnessContainer")
    const WitnessCollection = useWitnesses()

    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
            ${WitnessCollection.map((currentWitness) => {
                    return WitnessComponent(currentWitness)
                }).join("")}
                `
            }

export default WitnessListComponent