import React from "react";

const ReactRouter = props => {
  const code = `function App() {
  return (
    <Router>
      <h1>Startpagina</h1>
      <Routes>
        <Route path='/ReactPage' element={<ReactPage />}>
        </Route>
      </Routes>
    </Router>
  );
}`

  return (
    <div>
      <h2>React Routers met routes</h2>
      <p>
        Voordat je uberhaüpt kan werken met routers in React moet je eerst de package instaleren.<br />
        In je terminal moet je de volgende comando invoeren: npm install --save react-router-dom .<br />
        Daarna moet je het importeren voorbeeld: import {"{BrowserRouter as Router, Route, Redirect, Switch}"} from 'react-router-dom'.<br />
        Ik laat eerst een voorbeeld zien van hoe de code eruit ziet van een versie van App.js en leg het daarna stap voor stap uit.<br /><br />

        Voorbeeld:<br /><br />

        <pre style={{ whiteSpace: 'pre' }}>
          {code}
        </pre>
        <br /><br />
        Zoals je ziet moet de gehele code ingecapsuleerd worden in de Router om ervoor te kunnen zorgen dat de Routes werken.<br />
        In de nieuwere versies van react-router-dom moet je Routes incapsuleren in de Routes keyword.<br />
        Tot slot heb je de Route keyword waar je path en element in moet gebruiken.<br />
        In path moet je de html addres of de plaatsing daarvan verwerken.<br />
        In de opgestarte browser als je npm start doet in de terminal moet je http://localhost:3000/ReactPage in de browser voeren en je kan de pagina zien.<br />
        De element onderdeel bepaalt wat react renderd in je browser.<br />
        Je ziet alleen de pages die verbonden zijn met de path.<br />
      </p>
    </div>
  )
}

export default ReactRouter