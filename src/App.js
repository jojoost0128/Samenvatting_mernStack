import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import './App.css';
import ReactPage from './Pages/ReactPage';
import ExpressPage from './Pages/ExpressPage'
import NodePage from './Pages/NodePage';
import LinkLijst from './Shared/LinkLijst';

function App() {
  const LinkObjectLijstje = [
    { path: 'ReactPage', name: 'React' },
    { path: 'ExpressPage', name: 'Express' },
    { path: 'NodePage', name: 'Node' },
  ]
  return (

    <Router>
      <Routes>
        <Route path='/' element={
          <div>
            <h1>Startpagina</h1>
            <LinkLijst paths={LinkObjectLijstje} />
          </div>} />
        <Route path='/ReactPage/*' element={<ReactPage />} />
        <Route path='/ExpressPage/*' element={<ExpressPage />} />
        <Route path='/NodePage/*' element={<NodePage />} />
      </Routes>
    </Router>
  );
}

export default App;
