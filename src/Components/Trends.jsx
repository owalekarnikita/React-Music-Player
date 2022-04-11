import React from 'react';
import "./scss/main.css";
import { Link } from 'react-router-dom';


const Trends = () => {
  return (
    <div> 
      <h1 className='text-2xl'>This is Trendy Component </h1>
      <Link to="/extra-pages/Eg">Hello</Link>
    </div>
  )
}

export default Trends;