import React ,{ useState } from "react";
import "boxicons/css/boxicons.min.css";
import { useNavigate } from "react-router-dom";

const Sidebar = ({ searchQuery, setSearchQuery }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className=" w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex">
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">
          <div
            onClick={() => navigate("/")}
            className="flex items-center gap-3 pl-4 pt-2 cursor-pointer"
          >
            <i className="bx bx-home-alt text-3xl"></i>
            <p className="font-bold">Home</p>
          </div>
         <div className='flex pt-2 items-center gap-2 px-4 py-2'>
  <i className='bx bx-search-alt-2 text-2xl'></i>
  <p className='font-bold'>Search</p>
  <input
    type='text'
    placeholder='Search songs...'
    className='ml-2 flex-1 bg-[#1a1a1a] px-3 py-1.5 text-white rounded placeholder:text-gray-400 outline-none border border-gray-600'
    value={searchQuery}
    onChange={(e) => setSearchQuery(e.target.value)}
  />
</div>

        </div>
        <div className="bg-[#121212] h-[85%] rounded">
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <i class="bx bx-library text-3xl"></i>
              <p className="font-semibold">Your Library</p>
            </div>
            <div className="flex items-center gap-3 ">
              <i class="bx bx-right-arrow-alt text-3xl"></i>
              <i class="bx bx-plus text-3xl"></i>
            </div>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4">
            <h1>Create your first playlist</h1>
            <p className="font-light">it'seasy we will help you</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Create playlist
            </button>
          </div>
          <div className="p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4">
            <h1>Let's find some podcasts to follow</h1>
            <p className="font-light">we'll keep you update on new episodes</p>
            <button className="px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4">
              Browse Podcasts
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
