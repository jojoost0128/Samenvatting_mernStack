import React from "react";

const UseEffectHook = props => {
    const code = `
    useEffect(() => {
            (hier schrijf je de functie)
        }, [dit is de dependency array, laat het leeg om de functie een keer te laten lopen of zet een afhankelijke variabele in voornamelijk useState variabeles])
    `

    return (
        <div>
            <h2>
                UseEffect
            </h2>
            <p>
                UseEffect werkt vergelijkbaar met useState.<br />
                Het beste manier om dit uit te leggen is dat useState een variabele is dat opniew gerenderd kan worden in de browser en useEffect een functie is dat opnieuw gerenderd wordt.<br />
                Je moet useEffect importeren van react Voorbeeld: import React, {`{useState,useEffect}`} from 'react'.<br /><br />

                Voorbeeldcode:<br />
                <pre style={{ whiteSpace: 'pre' }}>{code}</pre>

            </p>
        </div>
    )
}

export default UseEffectHook