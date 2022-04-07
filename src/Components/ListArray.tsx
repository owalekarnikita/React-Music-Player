import React from 'react';

interface Artist{
    list : {
        id : number,
        img : string,
        title :string,
        listeners :string,
        time : string,
        album : string,
        url ?: string
    }[]
}

const ListArray:React.FC<Artist> = ({list}) => {
  return (
    <ol className='h-72 overflow-y-scroll'>
        <li className='flex'>
                    <span>#</span>&nbsp;
                    <span>&nbsp;</span>
                    &nbsp;
                    <span>Title</span> &nbsp;
                    <span>Playing</span>&nbsp;
                    <span>Time</span> &nbsp;
                    <span>Album</span>&nbsp;
                </li>
        {list.map(song => {
            return (
                <li className='flex '>
                    <span>{song.id}</span>&nbsp;
                    <span><img src={song.img} alt="img" className='w-14 h-14'/></span>
                    &nbsp;
                    <span>{song.title}</span> &nbsp;
                    <span>{song.listeners}</span>&nbsp;
                    <span>{song.time}</span> &nbsp;
                    <span>{song.album}</span>&nbsp;
                </li>
            );
        })}
    </ol>
  )
}

export default ListArray;