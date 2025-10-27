import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'

import './App.css';
import ReactPage from './Pages/ReactPage';

function App() {

  return (

    <Router>
      <Routes>
        <Route path='/' element={<h1>Startpagina</h1>} />
        <Route path='/ReactPage*' element={<ReactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
