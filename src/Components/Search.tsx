import React from 'react';
import { FcPrevious,FcNext } from "react-icons/fc";

const Search = () => {
  return (
    <section className='m-5 mt-1'>
        <span className='float-left p-2 flex gap-6'> 
        <FcPrevious className='text-xl text-gray-400 hover:text-2xl'/>
        <FcNext className='text-xl hover:text-2xl'/>
        </span>
        <input type="search" name='search' placeholder='  search' className='border rounded-full bg-gray-200 p-1 text-black mg-right placeholder-black float-right'/>
        {/* <BsSearch className='right'/> */}
    </section>
  )
}

export default Search;