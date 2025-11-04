import React from "react";

const Overig = props => {
    return (
        <div>
            <h2>Overige extra informatie</h2>
            <p>
                In deze page komt een lijstje van extra informatie wat je kan opzoeken.<br />
                De informatie dat je hierin ziet wordt uitgelegd in de Udemy curses maar ik vond het te situationeel om een hele samenvatting van te schrijven.<br />
                In het lijstje komen simpele termen met een regel uitleg om te laten zien hoe je het gebruikt.<br />
                Dit lijstje is bedoelt dat je informatie opzoekt als je dat nodig hebt.<br />
            </p>
            <ul>
                <li>simpele desktop/mobiel intergratie: je React app moet op een mobiel en desktop bruikbaar zijn.</li>
                <li>useParams: Dit is een component van react-router-dom om informatie uit de route te halen voornamelijk voor bijvoorbeeld id specificaties van individuele personen</li>
                <li>Modal: Dit is een soort van pop up bijvoorbeeld een weet je het zeker pop up als je iets wilt verwijderen.</li>
                <li>useReducer: UseReducer is een manier voor React om de states van meerdere items te verwerken door alles in een object te verwerken.</li>
                <li>costum Hook: Dit is een functie van React dat de state van een functie van een componenet kan veranderen.</li>
                <li>createContext: Dit wordt gebruikt om context te geven aan windows in je browser. een goed voorbeeld is als je inlogd op een site. voordat je inlogd ziet de site er anders er uit dan er na.</li>
            </ul>
        </div>
    )
}

export default Overig