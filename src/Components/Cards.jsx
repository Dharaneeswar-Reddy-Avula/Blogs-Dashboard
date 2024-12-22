import React from 'react'
import { FaRegStar } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { CiCircleMinus } from "react-icons/ci";
import { GoKebabHorizontal } from "react-icons/go";
import { CiSaveDown2 } from "react-icons/ci";

const Cards = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row border border-1 bg-black w-[45%]">
        <div className="flex flex-col p-[20px] gap-[2px]">
          <div className="flex flex-row">
            <div>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLD6onXKhquFdAX4fMYf0e_e0mwTZhUFoxSw&s" className="h-[20px] w-[20px] rounded-full" alt="profile" />
            </div>
            <div className="pl-2 text-white">Kris Gage</div>
          </div>

          <div className="flex flex-row pt-2">
            <div className="flex flex-row w-[200px] h-[150px]">
              <img src="https://images.pexels.com/photos/851213/pexels-photo-851213.jpeg?cs=srgb&dl=pexels-fotios-photos-851213.jpg&fm=jpg" className="w-[200px] h-[150px] p-[10px]" alt="post" />
            </div>
            <div className="flex flex-col pl-4">
              <p className="text-3xl font-semibold text-white">How to *really* know that you are in love</p>
              <p className="text-gray-500 text-xl font-semibold">Because most of the signs they tell you are garbage</p>
            </div>
          </div>
           <div className="flex justify-center items-center">
          <div className="flex flex-row items-center pt-4 gap-2">
            <div className="flex items-center">
              <FaRegStar className="mr-2 text-white" />
              <span className="text-white">August 3, 2017</span>
            </div>
            <div className="flex items-center">
              <MdOutlineWavingHand className="mr-1 ml-3 text-white" />
              <span className="text-white">146k</span>
            </div>
            <div className="flex items-center">
              <TbMessageCircle className="mr-1 ml-3 text-white" />
              <span className="text-white">1024</span>
            </div>
            <div className="flex items-center">
              <CiCircleMinus className="ml-4 w-[26px] h-[26px] text-gray-500" />
            </div>
            <div className="flex items-center">
              <GoKebabHorizontal className="ml-4 w-[26px] h-[26px] text-gray-500" />
            </div>
            <div className="flex items-center">
              <CiSaveDown2 className="ml-4 w-[26px] h-[26px] text-gray-500" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
