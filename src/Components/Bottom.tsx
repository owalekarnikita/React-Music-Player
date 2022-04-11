import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

interface AList{
    list : {
        id : number,
        img : string,
        title :string,
        listeners :string,
        time : string,
        album : string,
        url ?: string
    }[];
}

const Bottom:React.FC<AList> = ({list}) => {
  return (
    <div>
        { list.map((song,index) => {
            return (
            <ReactAudioPlayer
            src={song.url}
            controls
            className= "w-full pb-2 pt-2"
            key={index}
            />
            )
        })}
    </div>
  )
}

export default Bottom;