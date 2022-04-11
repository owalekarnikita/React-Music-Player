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
    }[];
}


const ListArray:React.FC<Artist> = ({list}) => {
   
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
                        {list.map((song,index) => {

                                //play song onclick
                                const Active =( ) => {
                                        let a = new Audio(song.url);
                                        a.play();
                                        // a.onloadedmetadata = function() {
                                        //     alert(a.duration);
                                        // };
                            }

                            return (
                                <li className='grid grid-cols-12 gap-1 p-1 pl-3 pr-3' key={index} onClick={Active} >
                                    <span className='col-span-1'>{song.id}</span>
                                    <span className='col-span-1'><img src={song.img} alt="img" className='w-14 h-14'/></span>
                                    <span className='col-span-5'>{song.title}</span>
                                    <span className='col-span-2'>{song.listeners}</span>
                                    <span className='col-span-1'>{song.time}</span> 
                                    <span className='col-span-2'>{song.album}</span>
                                </li>
                            );
                        })}
                    </ol>
                    </div>

  )
}

export default ListArray;