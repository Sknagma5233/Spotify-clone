import React, { useRef, useState } from 'react';
import Navbar from './Navbar';
import { albumsData } from '../assets/assets';
import AlbumItem from './AlbumItem';
import { songsData } from '../assets/assets';
import SongItem from './songItem';

const DisplayHome = ({ searchQuery ='' }) => {
  const albumScrollRef = useRef(null); 
  const songScrollRef = useRef(null);
  const [showLeftAlbumArrow, setShowLeftAlbumArrow] = useState(false);
  const [showRightAlbumArrow, setShowRightAlbumArrow] = useState(true);
  const [showLeftSongArrow, setShowLeftSongArrow] = useState(false);
  const [showRightSongArrow, setShowRightSongArrow] = useState(true);

  const handleAlbumScroll = () => {
    const container = albumScrollRef.current;
    setShowLeftAlbumArrow(container.scrollLeft > 0);
    setShowRightAlbumArrow(container.scrollLeft < container.scrollWidth - container.clientWidth);
  };

  const scrollAlbumLeft = () => {
    albumScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollAlbumRight = () => {
    albumScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const handleSongScroll = () => {
    const container = songScrollRef.current;
    setShowLeftSongArrow(container.scrollLeft > 0);
    setShowRightSongArrow(container.scrollLeft < container.scrollWidth - container.clientWidth); 
  };

  const scrollSongLeft = () => {
    songScrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
  };

  const scrollSongRight = () => {
    songScrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };

  const filteredSongs = songsData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="relative">
          {showLeftAlbumArrow && (
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-gray-950 text-lg shadow-lg rounded-full px-3 py-1 hover:scale-110 transition"
              onClick={scrollAlbumLeft}
            >
            &lt;
            </button>
          )}
          <div
            ref={albumScrollRef}
            className="flex overflow-x-hidden space-x-4"
            onScroll={handleAlbumScroll}
          >
            {albumsData.map((item, index) => (
              <AlbumItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image} />
            ))}
          </div>
          {/* Right Arrow for Albums */}
          {showRightAlbumArrow && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-gray-950 text-lg shadow-lg rounded-full px-3 py-1 hover:scale-110 transition"
              onClick={scrollAlbumRight}
            >
              &gt;
            </button>
          )}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="relative">
          {/* Left Arrow for Songs */}
          {showLeftSongArrow && (
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-gray-950 text-lg shadow-lg rounded-full px-3 py-1 hover:scale-110 transition"
              onClick={scrollSongLeft}
            >
              &lt;
            </button>
          )}
          {/* Scrollable Container for Songs */}
          <div
            ref={songScrollRef}
            className="flex overflow-x-hidden space-x-4"
            onScroll={handleSongScroll}
          >
           {filteredSongs.length > 0 ? (
              filteredSongs.map((item, index) => (
                <SongItem
                  key={index}
                  name={item.name}
                  desc={item.desc}
                  id={item.id}
                  image={item.image}
                />
              ))
            ) : (
              <p className="text-white px-4">No matching songs found.</p>
            )}
          </div>
          {/* Right Arrow for Songs */}
          {showRightSongArrow && filteredSongs.length > 0 && (
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-700 text-gray-950 text-lg shadow-lg rounded-full px-3 py-1 hover:scale-110 transition"
              onClick={scrollSongRight}
            >
              &gt;
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
