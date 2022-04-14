import React,{ useState} from 'react';
import { UserContext,Data } from './UserContext';






const UserData:React.FC = ({children}) => {
    const [data] =useState<Data[]>([
            {
                id : 1,
                img : "require('./images/2.png')",
                title : "We are Never Ever Getting Back together ...",
                listeners : "66,789,456",
                time : "3:40",
                album : "Red",
                url : require('.././songs/1.mp3')
            },
            {
                id : 4,
                img : require('./images/4.jpg'),
                title : " Long Live ...",
                listeners : "66,789,456",
                time : "3:40",
                album : "Long Live",
                url : require('./songs/4.mp3')
            }
        ]);
        const value = data;
  return (
      <UserContext.Provider value ={value}>
        {children}
    </UserContext.Provider>
  )
}

export default UserData;