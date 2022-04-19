import './App.css';
import Trends from './Components/Trends';
import Library from './Components/Library';
import Discover from './Components/extra-pages/Discover';
import Made from './Components/extra-pages/Made';
import Daily from './Components/extra-pages/Daily';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar'
import "./Components/scss/main.css";
import Aside from './Components/Aside';
import Eg from './Components/extra-pages/Eg';
import Search from './Components/Search';
import FixedBottom from './Components/FixedBottom';
import UserData from 'Components/context/UserData';
import {useState} from 'react';



function App() {
  const [songs] = useState([
    { url: require("./Components/songs/1.mp3") },
    { url: require("./Components/songs/2.mp3") },
    { url: require("./Components/songs/3.mp3") },
    { url: require("./Components/songs/4.mp3") }
  ]);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  console.log(currentSongIndex);

  return (
    <UserData >
      <div className='main p-2 h-screen w-full overflow-hidden'>
        <Navbar />
        <div className='p-2 grid grid-rows-8'>
          <section className='row-span-1'><Search /></section>
          <section className='row-span-6 p-2 pr-4'>
            <Routes>
              <Route path="/" element={<Aside />} />
              <Route path="Trends" element={<Trends />} />
              <Route path="Library" element={<Library />} />
              <Route path="extra-pages/Discover" element={<Discover />} />
              <Route path="extra-pages/Made" element={<Made />} />
              <Route path="extra-pages/Daily" element={<Daily />} />
              <Route path="extra-pages/Discover" element={<Discover />} />
              <Route path="extra-pages/Made" element={<Made />} />
              <Route path="extra-pages/Daily" element={<Daily />} />

              <Route path="extra-pages/Eg" element={<Eg />} />
            </Routes>
          </section>
          <section className='row-span-1 sticky bottom-0 pr-4 pl-4 rounded'>
              <FixedBottom 
              currentSongIndex={currentSongIndex}
              setCurrentSongIndex={setCurrentSongIndex}
              songs={songs}
              />
          </section>
        </div>
      </div>
    </UserData>


  );
}

export default App;

