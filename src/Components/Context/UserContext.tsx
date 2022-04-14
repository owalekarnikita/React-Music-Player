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


export const UserContext = React.createContext<Data[] | null>(null);

// export const UserContextProvider = UserContext.Provider;
// export const UserContextConsumer = UserContext.Consumer;