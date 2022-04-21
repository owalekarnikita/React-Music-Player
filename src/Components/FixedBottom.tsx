import React, { useState, useRef, useEffect, useContext} from 'react';
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdOutlineRepeat,MdOutlineCastConnected} from "react-icons/md";
import { BsFillPauseCircleFill, BsShuffle,BsVolumeOff,BsVolumeDown ,BsFillPlayCircleFill} from "react-icons/bs";
import { VscClearAll } from "react-icons/vsc";
import { UserContext } from './context/UserContext';



const FixedBottom= (props:any) => {
   
    const {songList,activeSong,setActiveSong} = useContext(UserContext);
    console.log(activeSong);
    const [isPlaying, setIsPlaying] =useState(false); //useState 
    const[duration, setDuration] =useState(0);  //use state for duration
    const[currentTime, setCurrentTime] = useState(0);
      
    //Use Ref function
    const audioPlayer = useRef<HTMLAudioElement>(); 
    const ProgressBar = React.useRef<HTMLInputElement | any>(null);
    const animeRef:any = useRef();

    const changeVol = (e:any) => {
        audioPlayer.current.volume = Number(e.target.value / 100);
      };
    //Use Effect function
    useEffect(() => {
        const dur = Math.floor(audioPlayer.current.duration || 0);
        setDuration(dur);
        
        ProgressBar.current.max = dur;
        // console.log(audioPlayer?.current?.readyState,"ahgs");
    },[audioPlayer?.current?.onloadedmetadata,audioPlayer?.current?.readyState]);
    //
    const timeCalculate = (sec : number)=> {
        const min = Math.floor(sec/60);
        const returnMin=  min < 10 ? `0${min}` : `${min}`;
        const seconds = Math.floor(sec%60);
        const returnSecs=  seconds < 10 ? `0${seconds}` : `${seconds}`;
        return (
            `${returnMin} : ${returnSecs}`
        );
    }

    const timeHandler = () => {
        audioPlayer.current.currentTime = ProgressBar.current.value;
        changeCurrentTime();
    }

    const TogglePlay = () => {  //Toggle icon button
        setIsPlaying(!isPlaying);

        if (isPlaying)
        {
            audioPlayer.current.pause();
            cancelAnimationFrame(animeRef.current);
        }
        else 
        {
            audioPlayer.current.play();
            animeRef.current = requestAnimationFrame(playingSong);
        }
    }


    const playingSong = () => {
        ProgressBar.current.value= audioPlayer.current.currentTime ;
        changeCurrentTime();
        animeRef.current = requestAnimationFrame(playingSong);
    }

    const changeCurrentTime = () => {
        setCurrentTime(ProgressBar.current.value);

    }


    // Play a specific track next and prev song
    const a = (activeSong.id);
    const nextPlay = ()=> {
         let nw = (a);
         if(a === 9)
         {
             return 0;
         }
         else 
         {setActiveSong(songList[nw]);}

            //console.log(activeSong.id);
    }
    const prevPlay = ()=> {
        let nw = (a-2);
        if(a === 1)
        {
            return 0;
        }
        else 
        {setActiveSong(songList[nw]);}
   }

  return (
 
        <section className=''>
            <hr className="p-2" />
            <span className='grid grid-cols-12 gap-x-0'>

            <audio preload="metadata" className='w-full' src={activeSong.url} ref ={audioPlayer} /> 

            <span className='col-span-5 flex p-1 pl-10'>
                <button>
                    <VscClearAll className='p-1 text-2xl'/>
                </button>
                <button>
                    <MdOutlineCastConnected className='p-1 text-2xl'/>
                </button>
            </span>
            <span className='flex col-span-4 text-center'>
                <button>
                    <BsShuffle className='p-1 text-2xl'/> 
                </button>
                <button onClick={prevPlay}>
                    <MdOutlineSkipPrevious className='p-1 text-2xl '/>
                </button>
                <button onClick={TogglePlay}>
                    {isPlaying ? <BsFillPauseCircleFill className='p-1 text-2xl'  /> :<BsFillPlayCircleFill className='p-1 text-2xl'/>}
                </button>
                <button onClick={nextPlay}>
                    <MdOutlineSkipNext className='p-1 text-2xl '/>
                </button>
                <button>
                <MdOutlineRepeat className='p-1 text-2xl'/>
                </button>
            </span>
            <span className='flex'>
                <button>
                    <BsVolumeOff className=' text-2xl'/>
                </button>
                <input type="range" className='h-1 mt-3' min="0" max="100" onChange={changeVol}/>
                {/* <progress className='h-1 mt-3 w-20 bg-black'></progress> */}
                <button>
                    <BsVolumeDown className=' text-2xl'/>
                </button>
            </span>
            </span>
                <div className='grid grid-cols-12 p-1 ml-10 mr-10'>
                    <span className='p-1 col-span-1'>{timeCalculate(currentTime)}</span>
                    <input type="range"  className='w-full h-1 mt-4 col-span-10' defaultValue="0" ref={ProgressBar} onChange={timeHandler}/> 
                    <span className='p-1 col-span-1'>{(duration && !isNaN(duration)) && timeCalculate(duration)}</span>
                </div>
        </section>
   
        
  )
}
export default FixedBottom;

