import React, { useState, useRef, useEffect} from 'react';
// import ReactAudioPlayer from 'react-audio-player';
import { MdOutlineSkipNext, MdOutlineSkipPrevious, MdOutlineRepeat,MdOutlineCastConnected} from "react-icons/md";
import { BsFillPauseCircleFill, BsShuffle,BsVolumeOff,BsVolumeDown ,BsFillPlayCircleFill} from "react-icons/bs";
import { VscClearAll } from "react-icons/vsc";
// import { UserContext } from './context/UserContext';



const FixedBottom= (props:any) => {
    // const {songList} = useContext(UserContext);
    // console.log(songList);
    const [isPlaying, setIsPlaying] =useState(false); //useState 
    const[duration, setDuration] =useState(0);  //use state for duration
    const[currentTime, setCurrentTime] = useState(0);

    //Use Ref function
    const audioPlayer = useRef(new Audio(require('./songs/2.mp3'))) ; 
    const ProgressBar = React.useRef<HTMLInputElement | any>(null);
    const animeRef:any = useRef();

    //Use Effect function
    useEffect(() => {
        const dur = Math.floor(audioPlayer.current.duration);
        setDuration(dur);
        
        ProgressBar.current.max = dur;
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
    // console.log(audioPlayer);
    // const playNext = () => {
    //     audioPlayer.next();
    // }
    const changeSongIndex = (next = false) => {
        props.setCurrentSongIndex((s:any) => {
          if (next) {
            if (s < props.songs.length - 1) {
              return s + 1;
            }
            return s;
          } else {
            if (s - 1< 0) {
              return props.songs.length - 1;
            }
            return s - 1;
          }
        });
    }
  return (
 
        <section className=''>
            <hr className="p-2" />
            <span className='grid grid-cols-12 gap-x-0'>

            <audio preload="metadata" className='w-full' src={props.songs[props.currentSongIndex].url} ref={audioPlayer} /> 

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
                <button onClick={() => changeSongIndex(false)}>
                    <MdOutlineSkipPrevious className='p-1 text-2xl '/>
                </button>
                <button onClick={TogglePlay}>
                    {isPlaying ? <BsFillPauseCircleFill className='p-1 text-2xl'  /> :<BsFillPlayCircleFill className='p-1 text-2xl'/>}
                </button>
                <button onClick={() => changeSongIndex(true)}>
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
                <div className='grid grid-cols-12 p-1 ml-10 mr-10'>
                    <span className='p-1 col-span-1'>{timeCalculate(currentTime)}</span>
                    <input type="range"  className='w-full h-1 mt-4 col-span-10' defaultValue="0" ref={ProgressBar} onChange={timeHandler}/> 
                    <span className='p-1 col-span-1'>{(duration && !isNaN(duration)) && timeCalculate(duration)}</span>
                </div>
        </section>
   
        
  )
}
export default FixedBottom;

