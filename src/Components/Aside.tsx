import React from 'react';
import "./scss/aside.css";
import { MdVerified } from "react-icons/md";
import ListArray from './ListArray';


export const Aside = ()=> {
  
  return (
    <div className='h-3/4 p-2 pr-3 overflow-auto'>
      <div className='h-screen'>
          <section className='bgimg p-10 text-white'>
            <span className='tg pt-10 text-sm'><MdVerified /> &nbsp;
                <span className='mar'>Verified Artist </span>
            </span>
            <br />
            <h1 className='text-2xl capitalize font-bold'>tylor Swift</h1>
            <br />
            <span className='pb-10 text-sm'>45,666,789 Monthly Listeners</span><br /><br />
          </section>
          <br />
          <section>
              <h3 className='text-xl font-bold p-2'>Popular <span className='text-sm float-right pr-5 font-normal'>See all</span></h3> 
              <ListArray />
          </section> 
      </div>
    </div>
  )
}

export default Aside;