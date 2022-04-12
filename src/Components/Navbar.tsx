import React from 'react';
import { AiOutlineHome, AiOutlineGitlab,AiOutlineCalendar,AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BsRecordCircleFill, BsMusicNoteList, BsCollectionPlay } from "react-icons/bs";
import { RiUserAddLine } from "react-icons/ri";
import "./scss/main.css";
import "./scss/navbar.css";
import { NavLink } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <div className='w-full divbor'>
        <img src={require('./images/logo.png')} alt='logo' className='p-2'/>
        <br/>
        <section className='pl-2'>
            <ul>
                <li className='li p-2'> <NavLink to="/"> <AiOutlineHome className='a'/> Home</NavLink> </li>
                <li className='li p-2'> <NavLink to="/Trends" ><AiOutlineGitlab className='a'/>  Trendy</NavLink> </li>
                <li className='li p-2'> <NavLink to="/Library" ><HiOutlineMusicNote className='a'/>  Library</NavLink> </li>
            </ul>
            <br/>
            <span className='p-2 text-gray-500'> Discover</span>
            <br /><br />
            <ul>
                <li className='li p-2'> <NavLink to="/extra-pages/Discover" ><AiOutlineCalendar className='a'/> Discover Weekly</NavLink> </li>
                <li className='li p-2'> <NavLink to="/extra-pages/Made" ><BsRecordCircleFill className='a'/>  Made For You</NavLink></li>
                <li className='li p-2'> <NavLink to="/extra-pages/Daily" ><BsCollectionPlay className='a'/>  Daily Mix</NavLink> </li>
            </ul>
            <br/>
            <span className='p-2 text-gray-500'> Your Collections</span>
            <br /><br />
            <ul>
                <li className='li p-2'> <NavLink to="/extra-pages/Discover" > <AiOutlineHeart className='a'/> Liked Songs</NavLink> </li>
                <li className='li p-2'> <NavLink to="/extra-pages/Made" ><RiUserAddLine className='a'/>  Favorite Artist</NavLink> </li>
                <li className='li p-2'> <NavLink to="/extra-pages/Daily" ><BsMusicNoteList className='a'/>  Playlist</NavLink> </li>
            </ul>
        </section>
    </div>
  )
}

export default Navbar;