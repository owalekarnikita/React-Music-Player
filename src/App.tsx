import React from 'react';
import './App.css';
import Trends from './Components/Trends';
import Library from './Components/Library';
import Discover from './Components/extra-pages/Discover';
import Made from './Components/extra-pages/Made';
import Daily from './Components/extra-pages/Daily';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import "./Components/scss/main.css";
import Main from './Components/Main';
import Eg from './Components/extra-pages/Eg';
import Search from './Components/Search';
import FixedBottom from './Components/FixedBottom';

function App() {
  return (
      <div className='main p-2 h-screen w-full overflow-hidden'>
        <Navbar />
        <div className='p-2 grid grid-rows-8'>
          <section className='row-span-1'><Search /></section>
          <section className='row-span-6 p-2 pr-4'>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="Trends" element={<Trends />} />
              <Route path="Library" element={<Library />} />
              <Route path="extra-pages/Discover" element={<Discover />} />
              <Route path="extra-pages/Made" element={<Made />} />
              <Route path="extra-pages/Daily" element={<Daily />} />
              <Route path="extra-pages/Discover" element={<Discover />} />
              <Route path="extra-pages/Made" element={<Made />} />
              <Route path="extra-pages/Daily" element={<Daily />} />

              <Route path="extra-pages/Eg" element={<Eg />} />
            </Routes>
          </section>
          <section className='row-span-1 sticky bottom-0 pr-4 pl-4 rounded'>
              <FixedBottom />
          </section>
        </div>
      </div>
  );
}

export default App;

