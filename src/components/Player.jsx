import React, { useContext } from 'react'
import { PlayerContext } from '../contexts/PlayerContext'

function Player() {

const {track,seekBar,seekBg,playStatus,play,pause,time,previous,next,seekSong} = useContext(PlayerContext);
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
        <div className='hidden lg:flex items-center gap-4'>
            <img className='w-12' src={track.image} alt=''/>
            <div>
                <p>{track.name}</p>
                <p>{track.desc.slice(0,50)}</p>
            </div>
        </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
        <i class='bx bx-shuffle cursor-pointer text-xl'></i>
        <i onClick={previous} class='bx bx-skip-previous cursor-pointer text-2xl'></i>
        {playStatus? 
        <i onClick={pause} class='bx bx-pause cursor-pointer text-2xl'></i>
        :<i onClick={play} class='bx bx-play cursor-pointer text-2xl'></i>
        }
        <i  onClick={next} class='bx bx-skip-next cursor-pointer text-2xl'></i>
        <i class='bx bx-repost cursor-pointer text-xl'></i>
        </div>
        <div className='flex items-center gap-5'>
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer'>
            <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full'/>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
      <i class='bx bx-play-circle'></i>
      <i class='bx bx-microphone'></i>
      <i class='bx bx-add-to-queue'></i>
      <i class='bx bx-speaker'></i>
      <i class='bx bx-volume-full'></i>
      <div className='w-20 bg-slate-50 h-1 rounded'>
      </div>
      <i className='bx bx-movie-play'></i>
      <i class='bx bxs-zoom-in'></i>
      </div>
    </div>
  )
}

export default Player
