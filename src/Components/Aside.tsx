import React from 'react';
import "./scss/aside.css";
import { MdVerified , MdOutlineSkipNext, MdOutlineSkipPrevious, MdOutlineRepeat,MdOutlineCastConnected} from "react-icons/md";
import { BsFillPauseCircleFill, BsShuffle,BsVolumeDown,BsVolumeOff } from "react-icons/bs";
import { VscClearAll } from "react-icons/vsc";
import ReactAudioPlayer from 'react-audio-player';
import List from './List'; 

// interface AList {
//    lists : MyList[];
// }

const Aside = ()=> {
  
  return (
    <div className='pl-2 pt-2 pr-2 grid grid-rows-6 h-screen'>
      <section className='row-span-1'>
        <span className='float-left p-5'></span>
        <input type="search" name='search' placeholder='  search' className='border rounded-full bg-gray-300 p-1 text-black mg-right placeholder-black float-right'/>
        {/* <BsSearch className='right'/> */}
      </section>
      <div className='row-span-5 overflow-auto p-2 pr-4'>
          <section className='bgimg p-10 text-white'>
            <span className='tg pt-10 text-sm'><MdVerified /> &nbsp;
                <span className='mar'>Verified Artist </span>
            </span>
            <br />
            <h1 className='text-2xl capitalize font-bold'>tylor Swift</h1>
            <br />
            <span className='pb-10 text-sm'>45,666,789 Monthly Listeners</span><br /><br />
          </section>
          <br />
          <section>
              <h3 className='text-xl font-bold p-2'>Popular <span className='text-sm float-right pr-5 font-normal'>See all</span></h3>       
              <div>
              <List />
              </div>
          </section> 
      </div>
      <hr className='p-1'/>
      <section className='row-span-1'>
        <span className='grid grid-cols-12 gap-x-0'>
          <span className='col-span-4 flex p-1 pl-10'>
            <VscClearAll className='p-1 text-2xl'/>
            <MdOutlineCastConnected className='p-1 text-2xl'/>
          </span>
          <span className='col-span-5 flex text-center'>
            <BsShuffle className='p-1 text-2xl'/>
            <MdOutlineSkipPrevious className='p-1 text-2xl'/>
            <BsFillPauseCircleFill className='p-1 text-2xl'/>
            <MdOutlineSkipNext className='p-1 text-2xl'/>
            <MdOutlineRepeat className='p-1 text-2xl'/>
          </span>
          <BsVolumeOff className='p-1 text-2xl'/>
          <BsVolumeDown className='p-1 text-2xl'/>
        </span>
      <ReactAudioPlayer
          src={require('./songs/1.mp3')}
          autoPlay
          controls
          className= "w-full"
        />
      </section>
    </div>
  )
}

export default Aside;