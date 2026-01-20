import React from "react";

const ErrorHandeling = () => {
    const voorbeeld = `
    if (!Hier moet je zien of er data zit in de gekozen variabele) {
        const error = new Error(hier moet de bericht komen voor je error)
        error.code = hier moet je errorcode komen
        throw error
    }`

    const voorbeeld1 = `
    class HttpError extends Error{
        constructor(message, errorCode){
            super(message)
            this.code = errorCode}}
    `
    return <div>
        <h2>Error handeling</h2>
        <p>
            Met het opstellen van een server kan er rare dingen gebeuren die niet bedoelt zijn.<br />
            Zelfs als al je code klopt en goed functioneerd dan kan een gebruiker een Error veroorzaken als hij informatie probeert op te zoeken dat niet bestaat in je database.<br />
            Dat gebeurt bijvoorbeeld met /:variabele in je path voor je middelware.<br />
            Je gebruiker zet dan bijvoorbeeld zijn naam daarin om in zijn account te komen maar express laat dan niks zien vanwege een typfoutje.<br />
            <br />
            Je kan dit voorkomen om een Error middelware te maken in je main file.<br />
            Dit doe je met dit stukje code: {`app.use((error, req, res, next) => {functie})`}.<br />
            Er zitten 2 veranderingen in dat anders zijn dan de gebruikelijke middelware.<br />
            Je hebt geen path nodig want deze middelware moet uitgevoerd worden voor elke path.<br />
            Dan heb je nog de error bij de req, res en next.<br />
            Deze atribute wordt gebruikt als een van je andere middelwares een gecodeerde error gooit.<br />
            <br />
            Nu komen we bij wat er in de functie moet komen.<br />
            Eerst moet de code zien of er een response al gegeven is.<br />
            Dat kan gedaan worden met een simpele if statement dat kijkt of iets al gestuurd is Voorbeeld: {`if(res.HeaderSent)`}<br />
            Dan moet in de if statement een return komen met een next functie voor de volgende error.<br />
            Tot slot moet je nog een status gooien en dat kan met de volgende code snippet{`res.status(error.code || 500)`}.<br />
            De error.code zorgt ervoor dat je middelware zijn eigen statuscode kan gooien anders geeft het een server error met statuscode 500.<br />
            Hier vind je de lijst met alle errorcodes dat je kan gebruiken en wat ze betekenen <a href='https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status'>linkje</a>.<br />
            Vergeet niet om een berichtje te laten als een error ontstaat met res.json() zodat je weet waar de oorzaak van je error is.<br />
            Ook je error bericht kan gebruik maken van de error van andere middelware als dat gegooid wordt met error.message<br />
            <br />
            In de alinea hierboven hebben we een error handling middelware gemaakt om errors van andere middelware te laten gooien.<br />
            In het volgende voorbeeld laat ik een code snippet zien voor een simpele error handeling voor je middelware.<br />
            <pre style={{ whiteSpace: 'pre' }}>
                {voorbeeld}
            </pre>
            <br />
            Als je dit onderaan je middelware houdt dan zou het moeten werken als een basis.<br />
            Je kan dit zelfs meer versimplificeren door door een class te gebruiken om errors te fixen.<br />
            Zie de voorbeeld hieronder:<br />
            <pre style={{ whiteSpace: 'pre' }}>
                {voorbeeld1}
            </pre>
            <br />
            Je moet dan wel de code van de vorige voorbeeld een beetje aanpassen.<br />
            Bij const error = new Error moet je Error veranderen naar HttpError en de error code moet achter je bericht zitten.<br ></br>
            Dat is het.<br />
            Je kan classes in aparte files zetten en dan importeren naar de files die deze error handelingeng nodig hebben.<br />
        </p>
    </div>
}

export default ErrorHandeling