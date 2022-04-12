import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdOutlineRepeat,MdOutlineCastConnected} from "react-icons/md";
import { BsFillPauseCircleFill, BsShuffle,BsVolumeOff,BsVolumeDown } from "react-icons/bs";
import { VscClearAll } from "react-icons/vsc";

const FixedBottom = () => {
  return (
        <section className=''>
            <hr className="p-2" />
            <span className='grid grid-cols-12 gap-x-0'>
            <span className='col-span-5 flex p-1 pl-10'>
                <VscClearAll className='p-1 text-2xl'/>
                <MdOutlineCastConnected className='p-1 text-2xl'/>
            </span>
            <span className='flex col-span-5 text-center'>
                <BsShuffle className='p-1 text-2xl'/>
                <MdOutlineSkipPrevious className='p-1 text-2xl'/>
                <BsFillPauseCircleFill className='p-1 text-2xl'/>
                <MdOutlineSkipNext className='p-1 text-2xl'/>
                <MdOutlineRepeat className='p-1 text-2xl'/>
            </span>
            <BsVolumeOff className='p-1 text-2xl'/>
            <BsVolumeDown className='p-1 text-2xl'/>
             {/* <Marquee>We are Never Ever Getting Back together ...</Marquee> */}
            
            </span>
            {/* <div className="w-full bg-gray-200 items-center p-3 rounded-full">
                <progress className="bg-gray-600 h-1 w-full rounded-full" ></progress>
            </div> */}
            <ReactAudioPlayer
                src={require('./songs/1.mp3')}
                controls
                className= "w-full"
                onPlay={e => console.log("onPlay")}
                />
            {/* <audio controlsList='' className='w-full'>
                <source src={require('./songs/1.mp3')} type="audio/mpeg"/>
            </audio> */}
        </section>
  )
}

export default FixedBottom;
