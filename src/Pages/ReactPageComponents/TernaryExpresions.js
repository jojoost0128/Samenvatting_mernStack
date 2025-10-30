
import React, { useState } from "react";

const TernaryExpresions = props => {
    const [stateVoorbeeld, setStateVoorbeeld] = useState(false)
    const voorbeeldCode1 = `
        let isTrue = true
        isTrue && console.log('statement is true)
    `

    const voorbeeldCode2 = `
    let gebruikersNaam = null;
    let naamWeergave = gebruikersNaam ?? "Onbekend";
    console.log(naamWeergave);
    `


    const stateVoorbeeldTrueHandler = event => {
        setStateVoorbeeld(true)
    }

    const stateVoorbeeldFalseHandler = event => {
        setStateVoorbeeld(false)
    }

    return (
        <div>
            <h2>Ternary expresions</h2>
            <p>
                <h3>If en else (?)</h3>
                Ternary expresions zijn best omschreven als een soort van afkorting van de if en else statement.<br /><br />

                Voorbeeldje: condition ? valueIfTrue : valueIfFalse<br /><br />

                Als condition een waarde heeft van true dan wordt valueIfTrue geladen.<br />
                Anders wordt de waarde valueIfFalse geladen.<br />
                Het voordeel van ternaryexpresions is dat je de ternary expresions makkelijker kan gebruiken in jsx.<br /><br />

                Voorbeeld van werkende code {stateVoorbeeld ? 'De statement is true' : 'De statement is false'}

                <button onClick={stateVoorbeeldTrueHandler}>zet state naar true</button>
                <button onClick={stateVoorbeeldFalseHandler}>zet state naar false</button>

                <h3>And (&&)</h3>

                Voor de AND operator kan je && gebruiken.<br />
                Voorbeeldcode:<pre style={{ whiteSpace: 'pre' }}>{voorbeeldCode1}</pre>

                <h3>OR (||)</h3>

                De OR statement is || en het werkt ongeveer als de voorbeeld van de AND operator.<br />
                Het verschil tussen de twee is dat de OR operator wel iets zou laten zien omdat console.log truethy is.<br />

                <h3>Nullish coalescing (??)</h3>

                Nullish coalescing kan je gebruiken om te zien of je data binen hebt gekregen.<br />
                Voorbeeldcode:<pre style={{ whiteSpace: 'pre' }}>{voorbeeldCode2}</pre>

            </p>

        </div>
    )
}

export default TernaryExpresions