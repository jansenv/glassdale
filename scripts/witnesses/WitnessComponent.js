const WitnessComponent = (witnesses) => {
    console.log("*** I am the witness component ****")
    return `<section class="witness__info">
    <h3 class="witness__name">${witnesses.name}</h3>
    <p class="witness__statement">${witnesses.statements}</p>
    </section>
    `
}

export default WitnessComponent