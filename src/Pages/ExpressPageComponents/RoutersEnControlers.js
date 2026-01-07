import React from "react";

const RoutersEnControlers = props => {
    return (
        <div>
            <h2>Routers en Controlers</h2>

            <h3>Routers Basis</h3>
            <p>
                Om de router op te zetten moet je eerst Express importeren in een nieuwe file.<br />
                dit doe je met de volgende code (const express = require('express')).<br />
                dan kan je de router opzetten door gebruik te maken van de volgende code (const router = express.Router()).<br />
                Je kan dan de router aanroepen net als Middelware voorbeeld: router.get('path', (req, res, next) ={'> {functie voor de middelware}'})
                let er wel op dat je res in JSON data verstuurt door gebruik te maken van .json() methode.<br />
                <br />
                Je moet dat doen zodat de data leesbaar wordt voor je main file want je stuurt de router daar naartoe.<br />
                Je exporteert de router naar de main file zodat je daarvan gebruik van kan maken.<br />
                In de main file kan je de router op stellen met de volgende stuk code {`app.use('/path, Router)`}.<br />
                hiermee zorg je ervoor dat je de router oproept als de html gebruik maakt van de path in de main file.<br />
            </p>
        </div>
    )
}

export default RoutersEnControlers