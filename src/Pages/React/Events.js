import React from "react";

const Events = props => {
    return (
        <div>
            <h2>Events</h2>
            <p>
                Je hebt een waslijst aan events met allerlij verschillende effecten.<br />
                Om bijvoorbeeld een knop klikbaar te maken moet je deze code gebruiken {'<button onClick={functieHandler}>Text op knop </button>'}.
                Als een functie in een event moet komen dat moet Handler in de naam zitten om aan te geven dat hij voor events wordt gebruikt Voorbeeld: const functieHandler = event {'=> {code voor de functie}'}
                Je kan een lijst vinden van deze events in deze link <a href='https://www.w3schools.com/jsref/dom_obj_event.asp'>Lijst met events</a>.
                <br /><br />
                Alle events kan je in html tags zetten min of meer.
            </p>
        </div>
    )
}

export default Events