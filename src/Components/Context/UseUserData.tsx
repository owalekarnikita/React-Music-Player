import React from 'react';
import { Data } from './UserContext';

const UseUserData:React.FC<Data[]> = (item) => {
  return (
        <div> UseUserData 
            { item.map((a):any => {
                return(
                    <p>Value :{a.img} </p>
                )
            })
            }
        </div>
  )
}

export default UseUserData;