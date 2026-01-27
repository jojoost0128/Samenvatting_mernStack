import React from "react";

const SimpeleConnectie = () => {
    return <div>
        <h2>Simpele connectie</h2>
        <p>
            <h3>Connectie maken</h3>
            Om een verbinding te maken tussen je programma en je database moet je eerst een driver downloaden.<br />
            In je terminal moet je npm install --save mongodb.<br />
            Je kan dan eerst const MongoClient = require('mongodb').MongoClient invoeren.<br />
            In je cluster kan je dan connect klikken.<br />
            Je krijgt een menu te zien voor verschillende manieren om een connectie te maken.<br />
            Kies uit de opties de Node optie.<br />
            Je krijgt een url dat je in je code moet stoppen en dat kan je gewoon in een variabele zetten.<br />
            Let op dat je je wachtwoord invult van je user van de cluster in de url op de plaats van {'<password>'}.<br />
            <br />

            <h3>Iets maken om te doorsturen naar je database</h3>
            Om gebruik te maken van de code moet je eerst gebruik maken van express.<br />
            In express middelware vind je de uitleg hoe je req gebruikt.<br />
            Je hebt het nodig om gegevens van je client in te voeren in je database.<br />
            Dat doe je door req.body.keyvalue in te voeren.<br />
            Req.body roep je je database aan en keyvalue is voor het object van je database.<br />
            Dit heb je nodig om een object te hebben om door te sturen naar je database.<br />
            <br />

            <h3>Hoe je programma contact maakt</h3>
            Nu moet je code contact maken met je database.<br />
            Dit moet je doen met een try en catch code blokje.<br />
            Voornamelijk try heb je nodig want catch is voor errorhandeling.<br />
            Het eerste wat je moet doen is een connectie te maken met de database.<br />
            Dat doe je eerst door een client op te stellen voor je try blokje Voorbeeldje:<br />
            <br />
            const client = new MongoClient(url)<br />
            try...<br />
            <br />
            Dan gebruik je await client.connect() om verbinding te krijgen met je database.<br />
            De await is belangrijk omdat je code moet wachten op de verbinding van je database.<br />
            Dan moet je de database aanspreken voorbeeld:<br />
            const db = client.db()
            Tot slot moet je nog zeggen wat je database moet doen.<br />
            Hier heb je een code snippet:<br />
            const result = db.collection('products').insertOne(newProduct)<br />
            <br />
            In de db.collection(products) stukje vind je de cursor voor je programma om te gebruiken om mongoDB te navigeren.<br />
            Het products stukje is de naam van je cluster en de collection zorgt dat je programma kan vinden waar precies je database zit.<br />
            Dan heb je nog de insertOne stukje.<br />
            dat zegt dat de informatie tussen de haakjes toe gevoegd moet worden aan je database.<br />
            zorg werl dat je een object stuurt.<br />
        </p>
    </div>
}

export default SimpeleConnectie