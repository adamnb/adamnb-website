import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';


function App() {
  return (
      <div>
          <p>Bigger penis</p>
        <Routes>

          <Route path='/' element={<Home />} ></Route>
          <Route path='/adamnb.github.io' element={<Home />} ></Route>
        </Routes>
      </div>
  );
}

export default App;
