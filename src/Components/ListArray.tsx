import React,{useState,useRef, useContext} from 'react';
import "./scss/listarray.css";
import { BsFillPauseCircleFill,BsFillPlayCircleFill} from "react-icons/bs";
import { UserContext } from './context/UserContext';



const ListArray = () => {

    const {songList,activeSong} = useContext(UserContext);
    const [isPlaying, setIsPlaying] = useState(false); //useState 
    // const [songPlay, setSongPlay] = useState();
    
    const audioPlayer = useRef<HTMLAudioElement>(null!);
//    setSongPlay(songPlay);
    
  return (
              <div>
                    <ol className=''>
                        <li className='grid grid-cols-12 gap-1 pl-2 pr-2 pt-3 pb-3 font-bold'>
                                    <span className='col-span-1 '>#</span>
                                    <span className='col-span-1 '></span>
                                    <span className='col-span-5 '>Title</span> 
                                    <span className='col-span-2'>Playing</span>
                                    <span className='col-span-1'>Time</span>
                                    <span className='col-span-2'>Album</span>
                                </li>
                                
                                {/* map songList array */}
                        {songList.map((song,index) => {
                                // console.log(audioPlayer);
                                // const a = new Audio(song.url);
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

                            return (
                                <li className='grid grid-cols-12 gap-1 p-1 pl-3 pr-3' key={index} >
                                    <span className='col-span-1' onClick={TogglePlay}>{isPlaying ? <BsFillPauseCircleFill className='p-1 text-2xl'/> : <BsFillPlayCircleFill className='p-1 text-2xl'/>}</span>
                                    <span className='col-span-1'><img src={song.img} alt="img" className='w-14 h-14'/></span>
                                    <span className='col-span-5'>{song.title}</span>
                                    <span className='col-span-2'>{song.listeners}</span>
                                    <span className='col-span-1'>{song.time}</span> 
                                    <span className='col-span-2'>{song.album}</span>
                                    <audio src={song.url} ref={audioPlayer}></audio>
                                </li>
                            );
                        })}
                    </ol>
                </div>
  )
}

export default ListArray;