import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import './App.css';
import ReactPage from './Pages/ReactPage';
import LinkLijst from './Shared/LinkLijst';

function App() {
  const LinkObjectLijstje = [{ path: 'ReactPage', name: 'React' }]
  return (

    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <h1>Startpagina</h1>
            <LinkLijst paths={LinkObjectLijstje} />
          </div>} />
        <Route path='/ReactPage/*' element={<ReactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
