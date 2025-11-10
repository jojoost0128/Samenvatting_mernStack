import React from "react";

const NodeBasic = props => {
  const voorbeeld = `const content = 'Some content!';

fs.writeFile('Naam en plaats van de file.txt', content(wat er in de file komt te staan), err(dit is als je een Error krijgt met het vinden van de API) => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
`

  return (
    <div>
      <h2>Node basis</h2>
      <p>
        Voordat je begint met Node moet je eerst Node geïnstalleerd hebben.<br />
        Node werkt als een verbinding tussen javascript en de backend.<br />
        je kan de library aanroepen door een variabele op te stellen met een require functie Voorbeeld: const fs = require('fs').<br />
        met de fs variabele kan je meerdere dingen doen met node (meer informatie hier <a href='https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs'>link</a>).<br />
        <br />
        Om writefile te gebruiken zie het voorbeeld:<br />
        <pre style={{ whiteSpace: 'pre' }}>
          {voorbeeld}
        </pre>
        <br />
        De code in de voorbeeld zorgt ervoor dat je een text file maakt
      </p>
    </div>
  )
}

export default NodeBasic