import React from 'react';
import { AiOutlineHome, AiOutlineGitlab,AiOutlineCalendar,AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BsRecordCircleFill, BsMusicNoteList, BsCollectionPlay } from "react-icons/bs";
import { RiUserAddLine } from "react-icons/ri";
import "./scss/main.css";
import "./scss/navbar.css";
 

const Navbar = () => {
  return (
    <div className='h-screen divbor'>
        <img src={require('./images/logo.png')} alt='logo' className='p-2'/>
        <br/>
        <section className='pl-2'>
            <ul>
                <li className='li p-2 act'> <AiOutlineHome /> <a href='./' className='a'> Home</a> </li>
                <li className='li p-2'> <AiOutlineGitlab /> <a href='./' className='a'> Trendy</a> </li>
                <li className='li p-2'> <HiOutlineMusicNote /> <a href='./' className='a'> Library</a> </li>
            </ul>
            <br/>
            <span className='p-2 text-gray-500'> Discover</span>
            <br /><br />
            <ul>
                <li className='li p-2'> <AiOutlineCalendar /> <a href='./' className='a'> Discover Weekly</a> </li>
                <li className='li p-2'> <BsRecordCircleFill /> <a href='./' className='a'> Made For You</a> </li>
                <li className='li p-2'> <BsCollectionPlay /> <a href='./' className='a'> Daily Mix</a> </li>
            </ul>
            <br/>
            <span className='p-2 text-gray-500'> Your Collections</span>
            <br /><br />
            <ul>
                <li className='li p-2'> <AiOutlineHeart /> <a href='./' className='a'> Liked Songs</a> </li>
                <li className='li p-2'> <RiUserAddLine /> <a href='./' className='a'> Favorite Artist</a> </li>
                <li className='li p-2'> <BsMusicNoteList /> <a href='./' className='a'> Playlist</a> </li>
            </ul>
        </section>
    </div>
  )
}

export default Navbar;