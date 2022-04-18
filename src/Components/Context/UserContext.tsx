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
        activeSong : Data
    }


export const UserContext = React.createContext<Props>({} as Props);

// export const DataProvider = UserContext.Provider;
// export const DataConsumer = UserContext.Consumer;