import React, {useState} from 'react';
import { UserContext,Data } from './UserContext';


const UserData:React.FC = ({children}) => {
    // const ab = useContext(UserContext);
    const [activeSong, setActiveSong] =useState<Data>({} as Data)
    const [data] =useState<Data[]>([
            {
                id : 1,
                img : require('.././images/2.png'),
                title : "We are Never Ever Getting Back together ...",
                listeners : "66,789,456",
                time : "3:40",
                album : "Red",
                url : require('.././songs/1.mp3')
            },
            {
                id : 2,
                img : require('.././images/2.jpg'),
                title : "You Belong With Me",
                listeners : "46,789,456",
                time : "3:25",
                album : "Fearless",
                url : require('.././songs/2.mp3')
            },
            {
                id : 3,
                img : require('.././images/3.jpg'),
                title : "Back To December",
                listeners : "78,789,456",
                time : "3:58",
                album : "Speak Now",
                url : require('.././songs/3.mp3')
            },
            {
                id : 4,
                img : require('.././images/4.jpg'),
                title : " Long Live ...",
                listeners : "66,789,456",
                time : "3:40",
                album : "Long Live",
                url : require('.././songs/4.mp3')
            },
            {
                id : 5,
                img : require('.././images/1.jpg'),
                title : "I Knew You Were Trouble. (Remix) [feat. Sammy Adams]",
                listeners : "46,789,456",
                time : "3:25",
                album : "Red",
                url : require('.././songs/5.mp3')
            },
            {
                id : 6,
                img : require('.././images/2.jpg'),
                title : "Back To December",
                listeners : "78,789,456",
                time : "3:58",
                album : "1998",
                url : require('.././songs/3.mp3')
            },
            {
                id : 7,
                img : require('.././images/4.jpg'),
                title : " Long Live ...",
                listeners : "66,789,456",
                time : "3:40",
                album : "Long Live",
                url : require('.././songs/4.mp3')
            },
            {
                id : 8,
                img : require('.././images/1.jpg'),
                title : "I Knew You Were Trouble. (Remix) [feat. Sammy Adams]",
                listeners : "46,789,456",
                time : "3:25",
                album : "Red",
                url : require('.././songs/5.mp3')
            },
            {
                id : 9,
                img : require('.././images/2.jpg'),
                title : "Back To December",
                listeners : "78,789,456",
                time : "3:58",
                album : "1998",
                url : require('.././songs/3.mp3')
            }
        ]);
        const {Provider} = UserContext;
  return (
      <Provider value ={{songList : data,activeSong}}>
        {children}
    </Provider>
  )
}

export default UserData;