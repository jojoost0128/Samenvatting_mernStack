import React from "react";

const InfoTussenComponenten = props => {
    return (
        <div>
            <h2>{props.voorbeeld}</h2>
            <h3>informatie van parent naar child component sturen</h3>

            <p>Om informatie te sturen van een parentcomponent naar een ander child component moet er een connectie zijn tussen componenten.
                Ik gebruik de titel van dit stukje als voorbeeld in mijn code.
                <br /><br />
                Eerst moet de component gestuurd worden naar de App.js component, de App.js component wordt de parent component. <br />
                Om dat te doen moet je de informatie-sturen-tussen-componenten.js moet je de functie InfoTussenComponenten exporteren.<br></br>
                Dit doe je door het stukje export default InfoTussenComponenten te gebruiken.
                <br /><br />
                In App.js moet je de functie importeren. Om dit te doen schrijf je Import InfoTussenComponenten from {'{bestandslocatie}'}.<br></br>
                Zet dan in de jsx van de app functie {'<InfoTussenComponenten />'} daarin vind je een extra stukje code als voorbeeld='Informatie sturen tussen componenten'.<br></br>

                De string kan je aanroepen in de component informatie-sturen-tussen-componenten door gebruik te maken van de props in de functie.<br />
                Net als een object aanroepen kan de string aangeroepen worden door gebruik te maken van props.voorbeeld.<br /><br />

                Je kan een lijst doorgeven aan een andere component, maar je moet door de lijst heen mappen in het voorbeeld: {"<ul>"} props.lijst.map(item {'=> { return <li>{item}</li>}'}{"</ul>"})
            </p>
            <h3>informatie uitwisselen tussen Child- en Parent components</h3>

            <p>
                Om ervoor te zorgen dat een Child component iets aanpast in de Parent component moet je in feite je eigen Event maken. {/*Linkje om naar de Event pagina toe te gaan*/}
                Dit doe je door in de Parent component een handler functie te schrijven voorbeeld: const voorbeeldHandler = event {'=> {Jouw code}'} en in de jsx {'<ChildComponent onVoorbeeld={voorbeeldHandler}'}.<br></br>
                In de Childcomponent kan je dan gebruik maken van props om de functie in de parent component te activeren voorbeeld: props.onVoorbeeld()
            </p>
        </div>
    )
}

export default InfoTussenComponenten