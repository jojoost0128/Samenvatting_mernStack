import React from "react";

const Middelware = props => {
    return (
        <div>
            <h2>Middelware</h2>
            Voorbeeld Middelware:<br />
            {`app.use('/path', (req, res, next) => {functie})`}
            <p>
                <h3>basis middelware</h3>
                Je vindt boven het kopje een voorbeeld van middelware.<br />
                We begginnen eerst bij de methode use.<br />
                Er zijn meerdere functies mogelijk die use kunnen vervangen en je kan ze hier vinden <a href="https://expressjs.com/en/4x/api.html#app.METHOD">linkje</a>.
                LET OP use werkt bij alle http elementen en een van de andere functies werkt alleen bij specifieke http elementen.<br />
                Je kan uitzoeken welke methode werkt bij mdm.<br />
                <br />
                De path stukje bepaalt waar je de informatie plaatst.<br />
                Het werkt vergelijkbaar met je geheugen op je schijf als je meerdere mapjes hebt voorbeeld: /map1/map2/file.<br />
                Als je bijvoorbeeld een router gebruikt dan plakt de router de path automatisch voor de middelware path.<br />
                <br />
                Nu komen we bij de req, res en next functies van de middelware.<br />
                We beginnen met de req wat staat voor request.<br />
                Hiermee kan je informatie ophalen van databases, je eigen code of zelfs uit de path zelf.<br />
                In een path kan je een variabele zetten voorbeeld: /map1/:object.<br />
                Als je in de http iets wegzet op de plaats van object dan activeer je de middelware.<br />
                je kan deze informatie ophalen met req.params.object<br />
                <br />
                Res staat voor response en het is bedoelt voor het versturen van informatie.<br />
                Het stuurt terug wat verwerkt wordt door de middelware met mogelijke statussen.<br />
                <br />
                Tot slot heb je next.<br />
                Als je gebruik maakt van de next methode dan zorg je ervoor dat de middelware doorgaat naar de volgende middelware functie in je code.<br />



                In de Router fragment wordt uitgelegd hoe de paths min of meer werken.<br />
                Kort gezegd het is een soort van filing systeem voor data weer te geven in een mapje online.<br />
                soms heb je informatie nodig van een specifieke persoon uit een lijst van personen.
            </p>
        </div>
    )
}

export default Middelware