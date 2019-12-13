const WitnessComponent = (witnesses) => {
    console.log("*** I am the witness component ****")
    return `<section class="witness__info">
    <h3>Witness Statement</h3>
    <p class="witness__name">Name: ${witnesses.name}</p>
    <p class="witness__statement">Statement: ${witnesses.statements}</p>
    </section>
    `
}

export default WitnessComponent