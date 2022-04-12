import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdOutlineRepeat} from "react-icons/md";
import { BsFillPauseCircleFill, BsShuffle } from "react-icons/bs";
// import { VscClearAll } from "react-icons/vsc";

const FixedBottom = () => {
  return (
        <section className=''>
            <hr className="p-2" />
            <span className='grid grid-cols-12 gap-x-0'>
                <span className='col-span-5 flex p-1 pl-10'>
                    We are Never Ever Getting Back...
                </span>
                <span className='flex col-span-4 text-center'>
                    <BsShuffle className='p-1 text-2xl'/>
                    <MdOutlineSkipPrevious className='p-1 text-2xl'/>
                    <BsFillPauseCircleFill className='p-1 text-2xl'/>
                    <MdOutlineSkipNext className='p-1 text-2xl'/>
                    <MdOutlineRepeat className='p-1 text-2xl'/>
                </span>
                {/* 
                <Marquee>We are Never Ever Getting Back together ...</Marquee> */}
                <span className='overflow-hidden col-span-3'>
                    Tylor Swift
                </span>
            </span>
            <ReactAudioPlayer
                src={require('./songs/1.mp3')}
                controls
                className= "w-full"
                />
            
        </section>
  )
}

export default FixedBottom;
