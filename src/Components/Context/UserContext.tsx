import React from 'react';

export interface Data  {

        id : number,
        img : string,
        title :string,
        listeners :string,
        time : string,
        album : string,
        url ?: string
    }
    type Props = {
        songList : Data[],
        activeSong : Data,
        setActiveSong: React.Dispatch<React.SetStateAction<Data>>
    }


export const UserContext = React.createContext<Props>({} as Props);
