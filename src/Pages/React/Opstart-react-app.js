import React from "react";

const OpstartReactApp = props => {
    return (
        <div>
            {/*page REACT page Opstart App*/}
            <h2>React app opstarten</h2>
            <p>Om een react app te starten moet je de volgende stappen doen</p>
            <ol>
                <li>Check of node geïnstalleerd is. Dit kan je doen door in de terminal (node -v) te schrijven. als je een versienummer krijgt dan is het geïnstalleerd anders moet je node instaleren</li>
                <li>Open de terminal en schrijf de volgende commandos 1.(npx create-react-app naam-app) 2.(cd naam-app) 3.(npm start)</li>
            </ol>
        </div>
    )
}

export default OpstartReactApp