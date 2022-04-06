import React from 'react';
import Aside from './Aside';
import Navbar from './Navbar';
import "./scss/main.css";

const Main = () => {
  return (
    <div className='main p-2'>
        <Navbar />
        <Aside />
    </div>
  )
}

export default Main;