import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';


function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='adamnb-website/' element={<Home />} ></Route>
        </Routes>
      </div>
  );
}

export default App;
