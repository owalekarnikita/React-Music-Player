import React from 'react';
import './App.css';
import Main from './Components/Main'; 
import Trends from './Components/Trends';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import "./Components/scss/main.css";

function App() {
  return (
    <div className='main p-2'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="Trends" element={<Trends />} />
      </Routes>
    </div>
  );
}

export default App;

