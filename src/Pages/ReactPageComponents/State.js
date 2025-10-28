import React, { useState } from "react";

const State = props => {
    const [voorbeeld, setVoorbeeld] = useState('false')

    const setVoorbeeldTrueHandler = () => {
        setVoorbeeld('true')
    }

    const setVoorbeeldFalseHandler = () => {
        setVoorbeeld('false')
    }

    const setVoorbeeldTextHandler = event => {
        setVoorbeeld(event.target.value)
    }

    return (
        <div>
            <h2>States</h2>
            <p>
                States worden gebruikt om variabele te veranderen zonder constant de browser constant te refreshen.<br />
                Je moet eerst useState importeren van react.<br />
                Als je useState hebt geïmporteerd dan kan je een variabele mee maken door deze code te gebruiken: const [voorbeeld, setVoorbeeld] = useState('false').<br />
                In het voorbeeld zie je dat een array wordt gebruikt als variabele naam.<br />
                In dat array op plaats 1 vind je de naam van de variabele en dat gebruik je om de huidige staat van de variabele op te halen.<br />
                Op plaats 2 van dat array vind je een set functie van je variabele.<br />
                Je gebruikt dit om de staat van de state variabele te veranderen voorbeeld: setVoorbeeld('true').<br />
                Tot slot na de = teken wordt useState gebruikt.<br />
                Alles tussen de haken van useState wordt als eerste staat gebruikt.<br /><br />

                Zie hoe de staat verandert als je de knoppen klikt of als je een tekst in de tekstveld invoert.<br />
                Staat: ({voorbeeld})
            </p>
            <button onClick={setVoorbeeldTrueHandler}>Voorbeeld wordt true</button>
            <button onClick={setVoorbeeldFalseHandler}>Voorbeeld wordt false</button>
            <input type='text' onChange={setVoorbeeldTextHandler}></input>
        </div>
    )
}

export default State