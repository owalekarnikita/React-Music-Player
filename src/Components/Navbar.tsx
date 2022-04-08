import React from 'react';
import { AiOutlineHome, AiOutlineGitlab,AiOutlineCalendar,AiOutlineHeart } from "react-icons/ai";
import { HiOutlineMusicNote } from "react-icons/hi";
import { BsRecordCircleFill, BsMusicNoteList, BsCollectionPlay } from "react-icons/bs";
import { RiUserAddLine } from "react-icons/ri";
import "./scss/main.css";
import "./scss/navbar.css";
import { Link } from 'react-router-dom';
 

const Navbar = () => {
  return (
    <div className='h-screen divbor'>
        <img src={require('./images/logo.png')} alt='logo' className='p-2'/>
        <br/>
        <section className='pl-2'>
            <ul>
                <li className='li p-2 act'> <AiOutlineHome /> <Link to="/" className='a'>Home</Link> </li>
                <li className='li p-2'> <AiOutlineGitlab /> <Link to="/Trends" className='a'> Trendy</Link> </li>
                <li className='li p-2'> <HiOutlineMusicNote /> <Link to="/" className='a'> Library</Link> </li>
            </ul>
            <br/>
            <span className='p-2 text-gray-500'> Discover</span>
            <br /><br />
            <ul>
                <li className='li p-2'> <AiOutlineCalendar /> <Link to="/" className='a'>Discover Weekly</Link> </li>
                <li className='li p-2'> <BsRecordCircleFill /> <Link to="/" className='a'> Made For You</Link></li>
                <li className='li p-2'> <BsCollectionPlay /> <Link to="/" className='a'> Daily Mix</Link> </li>
            </ul>
            <br/>
            <span className='p-2 text-gray-500'> Your Collections</span>
            <br /><br />
            <ul>
                <li className='li p-2'> <AiOutlineHeart /> <Link to="/" className='a'>Liked Songs</Link> </li>
                <li className='li p-2'> <RiUserAddLine /> <Link to="/" className='a'> Favorite Artist</Link> </li>
                <li className='li p-2'> <BsMusicNoteList /> <Link to="/" className='a'> Playlist</Link> </li>
            </ul>
        </section>
    </div>
  )
}

export default Navbar;