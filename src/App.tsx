import React from 'react';
import './index.css';
import Cv from './screens/cv';
import Formulaire from './screens/formulaire';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="route">
     
      <Routes>
        <Route path='/' element={ <Cv />} />
        <Route path='/formulaire' element={ <Formulaire />} />
        

      </Routes>
      
    </div>
  );
}




export default App;
