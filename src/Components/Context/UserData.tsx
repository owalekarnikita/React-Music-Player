import React,{useContext, useState} from 'react';
import { UserContext } from './UserContext';

export interface MyData {
    track : [
        {
            id : 1,
            img : "require('./images/2.png')",
            title : "We are Never Ever Getting Back together ...",
            listeners : "66,789,456",
            time : "3:40",
            album : "Red",
            url : "require('./songs/1.mp3')"
        },
        {
            id : 2,
            img : "require('./images/2.jpg')",
            title : "You Belong With Me",
            listeners : "46,789,456",
            time : "3:25",
            album : "Fearless",
            url : "require('./songs/2.mp3')"
        }
    ]
}




const UserData = () => {
    const data = useContext(UserContext);
  return (
      <UserContext.Provider value={
            [
                {
                    id : 1,
                    img : "require('./images/2.png')",
                    title : "We are Never Ever Getting Back together ...",
                    listeners : "66,789,456",
                    time : "3:40",
                    album : "Red",
                    url : "require('./songs/1.mp3')"
                },
                {
                    id : 2,
                    img : "require('./images/2.jpg')",
                    title : "You Belong With Me",
                    listeners : "46,789,456",
                    time : "3:25",
                    album : "Fearless",
                    url : "require('./songs/2.mp3')"
                }
            ]
      }>
        <div>UserData 
            
        </div>
    </UserContext.Provider>
  )
}

export default UserData;