import React from "react";

const ExpressBasic = () => {
    const voorbeeld = `
        app.use((req, res, next) => {
        
        }
        `
    return (
        <div>
            <h2>Basis van express</h2>
            <p>
                Je kan een App starten door npm init in de terminal schrijven.<br />
                Je krijgt dan een package.json als je alle vragen van de terminal hebt beantwoord.<br />
                Over het algemeen kan je enter op alle vragen doen.<br />
                <br />
                Je hebt ne een lege App gemaakt en nu wordt het tijd voor express.<br />
                Je kan express installeeren door npm install express --save in de terminal te zetten.<br />
                Nu heb je een mapje gekregen met node_modules waarin je allerlei modules in hebt waaronder express.<br />
                <br />
                Je moet Express importeren in je code om gebruik te maken van express.<br />
                Dit doe je door eerst const express = require('express') en daarna const app = express().<br />
                Nu kan je express gebruiken door middleware te maken voor een server.<br />
                je maakt middleware door naar de voorbeeld te kijken.<br />
                <br />
                <pre style={{ whiteSpace: 'pre' }}>
                    {voorbeeld}
                </pre>
                <br />
                Dit is de begin van de middleware en hoe een server praat.<br />
                <br />
                Ik raad aan om nodemon te installeëren in de terminal.<br />
                Dit doe je door de commando in te voeren npm install nodemon --save-dev.<br />
                Ik raad ook aan om naar package.json file te gaan en iets aan te passen in de scripts.<br />
                In de scripts sectie van package.json kan je dit wegzetten "start": "nodemon Naam_van_je_app"<br />
                Je kan dan npm start in je terminal invoeren om je server op te starten.<br />
                Het voordeel van nodemon is dat je niet steeds de server opnieuw moet opstarten als je je code aanpast.<br />
                <br />
                Ook is een aanrader om bodyparser te installeëren als package.<br />
                Dit is de commando npm install bodyparser --save.<br />
                Het helpt te voorkomen ingewikkelde middleware te schrijven<br />
                zorg er wel voor dat app.use(bodyParser.urlencoded({'{extended : false}'})) in je code staat en deze package importeert in je code.
            </p>
            npm init

        </div>
    )
}

export default ExpressBasic