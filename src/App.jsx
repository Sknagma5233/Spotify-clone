import React, { useContext, useState } from "react";
import "boxicons/css/boxicons.min.css";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";
import Display from "./components/Display";
import { PlayerContext } from "./contexts/PlayerContext";

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <div className="h-screen bg-black">
        <div className="h-[90%] flex ">
          <Sidebar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          <Display searchQuery={searchQuery} />
        </div>
        <Player />
        <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
    </>
  );
};

export default App;
