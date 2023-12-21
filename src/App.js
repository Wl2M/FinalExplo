import './App.css';
import React from 'react';
import MapFood from './components/Map'
import  LarnPoon  from './components/Larnpon';
import Station from './components/Station';
import Larnmai from './components/LarnMai';
import Susco from './components/Susco';
import { Route,Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Routes> 
          {/*-----------------------------------------------------------------Map---------------------------------------------------------------------------------------------*/}

              <Route path="/larnpon" element={<LarnPoon/>}/> 
              <Route path="/station" element={<Station/>}/> 
              <Route path="/larnmai" element={<Larnmai/>}/> 
              <Route path="/susco" element={<Susco/>}/> 
              <Route path="/" element={<MapFood />}/>
              
          {/*-----------------------------------------------------------------Map---------------------------------------------------------------------------------------------*/}
      
    </Routes>
      

    </div>
  );
}

export default App;
