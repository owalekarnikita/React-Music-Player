import React from 'react'

const Search = () => {
  return (
    <section >
        <span className='float-left p-5'></span>
        <input type="search" name='search' placeholder='  search' className='border rounded-full bg-gray-300 p-1 text-black mg-right placeholder-black float-right'/>
        {/* <BsSearch className='right'/> */}
    </section>
  )
}

export default Search;