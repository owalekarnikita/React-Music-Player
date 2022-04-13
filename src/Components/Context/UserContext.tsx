import { createContext} from 'react';

export interface Data {
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


export const UserContext = createContext<Data["list"]>([]);
