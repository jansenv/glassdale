const CriminalComponent = criminals => {
    console.log("*** I am the item component ****")
    return `<section class="criminal__info">
    <h3 class="criminal__names">${criminals.name}</h3>
    <ul>
    <li>Age: ${criminals.age}</li>
    <li>Crime: ${criminals.conviction.toUpperCase()}</li>
    <li>Term start: ${new Date(criminals.incarceration.start).toLocaleDateString('en-US')}</li>
    <li>Term end: ${new Date(criminals.incarceration.end).toLocaleDateString('en-US')}</li>
    </ul>
    <button id="associates--${criminals.id}">Associate Alibis</button>
    </section>
    `
}

export default CriminalComponent