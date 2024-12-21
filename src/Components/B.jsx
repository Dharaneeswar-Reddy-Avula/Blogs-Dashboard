import React from "react";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineWavingHand } from "react-icons/md";
import { TbMessageCircle } from "react-icons/tb";
import { CiCircleMinus } from "react-icons/ci";
import { GoKebabHorizontal } from "react-icons/go";
import { CiSaveDown2 } from "react-icons/ci";
import React from 'react';



const Cards = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {blogData.map((blog) => (
        <div
          key={blog.id}
          className="flex flex-col md:flex-row border border-1 bg-black w-[45%] p-4 rounded-lg"
        >
          <div className="flex flex-col p-4 gap-4">
            <div className="flex flex-row items-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLD6onXKhquFdAX4fMYf0e_e0mwTZhUFoxSw&s"
                className="h-[40px] w-[40px] rounded-full"
                alt="profile"
              />
              <div className="pl-2 text-white text-lg font-semibold">{blog.author}</div>
            </div>

            <div className="flex flex-row">
              <div className="flex flex-row w-[200px] h-[150px]">
                <img
                  src={blog.image}
                  className="w-[200px] h-[150px] rounded-md"
                  alt="post"
                />
              </div>
              <div className="flex flex-col pl-4">
                <p className="text-2xl font-bold text-white">{blog.title}</p>
                <p className="text-gray-400 text-lg font-medium">{blog.content}</p>
              </div>
            </div>

            <div className="flex justify-center items-center">
              <div className="flex flex-row items-center pt-4 gap-4">
                <div className="flex items-center">
                  <FaRegStar className="mr-2 text-white" />
                  <span className="text-white">{blog.date}</span>
                </div>
                <div className="flex items-center">
                  <MdOutlineWavingHand className="mr-1 ml-3 text-white" />
                  <span className="text-white">{blog.likes}</span>
                </div>
                <div className="flex items-center">
                  <TbMessageCircle className="mr-1 ml-3 text-white" />
                  <span className="text-white">{blog.comments}</span>
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
      ))}
    </div>
  );
};

export default Cards;









