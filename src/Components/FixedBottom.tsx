import React, { useState, useRef, Ref, useEffect } from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdOutlineRepeat,MdOutlineCastConnected} from "react-icons/md";
import { BsFillPauseCircleFill, BsShuffle,BsVolumeOff,BsVolumeDown ,BsFillPlayCircleFill} from "react-icons/bs";
import { VscClearAll } from "react-icons/vsc";



const FixedBottom = () => {
    const [isPlaying, setIsPlaying] =useState(false); //useState 
    const[duration, setDuration] =useState(0);  //use state for duration
    const[currentTime, setCurrentTime] = useState(0);

    const audioPlayer = useRef(new Audio(require('./songs/1.mp3'))) ; //Use Ref
    // const ProgressBar = React.useRef<HTMLInputElement>();

    useEffect(() => {
        const dur = Math.floor(audioPlayer.current.duration);
        setDuration(dur);
    },[audioPlayer?.current?.onloadedmetadata, audioPlayer?.current.readyState]);

    const timeCalculate = (sec : number)=> {
        const min = Math.floor(sec/60);
        const returnMin=  min < 10 ? `0${min}` : `${min}`;
        const seconds = Math.floor(sec%60);
        const returnSecs=  seconds < 10 ? `0${seconds}` : `${seconds}`;

        return (
            `${returnMin} : ${returnSecs}`
        );
    }

    const TogglePlay = () => {  //Toggle icon button
        setIsPlaying(!isPlaying);

        if (isPlaying)
        {
            audioPlayer.current.pause();
        }
        else 
        {
            audioPlayer.current.play();
        }
    }
    // const playNext = () => {
    //     audioPlayer.next();
    // }

  return (

        <section className=''>
            <hr className="p-2" />
            <span className='grid grid-cols-12 gap-x-0'>
            <audio ref={audioPlayer} preload="metadata" className='w-full' src={require('./songs/1.mp3')} />
            <span className='col-span-5 flex p-1 pl-10'>
                <button>
                    <VscClearAll className='p-1 text-2xl'/>
                </button>
                <button>
                    <MdOutlineCastConnected className='p-1 text-2xl'/>
                </button>
            </span>
            <span className='flex col-span-5 text-center'>
                <button>
                    <BsShuffle className='p-1 text-2xl'/> 
                </button>
                <button>
                    <MdOutlineSkipPrevious className='p-1 text-2xl '/>
                </button>
                <button onClick={TogglePlay}>
                    {isPlaying ? <BsFillPauseCircleFill className='p-1 text-2xl'  /> :<BsFillPlayCircleFill className='p-1 text-2xl'/>}
                </button>
                <button>
                    <MdOutlineSkipNext className='p-1 text-2xl '/>
                </button>
                <button>
                <MdOutlineRepeat className='p-1 text-2xl'/>
                </button>
            </span>
            <button>
                <BsVolumeOff className='p-1 text-2xl'/>
            </button>
            <button>
                <BsVolumeDown className='p-1 text-2xl'/>
            </button>
            </span>
                <div className='flex p-1'>
                    <span className='p-1'>{timeCalculate(currentTime)}</span>
                    <input type="range"  className='w-2/3 h-1 mt-4' defaultValue="0" /> 
                    <span className='p-1'>{(duration && !isNaN(duration)) && timeCalculate(duration)}</span>
                </div>
        </section>
  )
}

export default FixedBottom;

