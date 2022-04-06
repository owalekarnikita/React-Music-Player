import React from 'react';
import "./scss/aside.css";
import { MdVerified } from "react-icons/md";
// import { BsSearch } from "react-icons/bs";
import ReactAudioPlayer from 'react-audio-player';


const Aside = () => {
  
  return (
    <div>
      <section className=''>
        <input type="search" name='search' placeholder='  search' className='border rounded-full bg-gray-400 p-2 text-white mg-right placeholder-white'/>
        {/* <BsSearch className='right'/> */}
      </section>
      <br/>
      <section className='bgimg p-10'>
        <span className='tg'><MdVerified /> &nbsp;
            <span className='mar'>Verified Artist </span>
        </span>
        <br />
        <h1 className='text-2xl capitalize font-bold'>tylor Swift</h1>
        <br />
        45,666,789 Monthly Listeners
      </section>
      <section>
          <h3 className='text-xl font-bold p-2'>Popular</h3>
          <div>
           
          </div>

      </section>
      <section>
      <ReactAudioPlayer
          src={require('./songs/1.mp3')}
          autoPlay
          controls
          className="w-full"
        />
      </section>
    </div>
  )
}

export default Aside;