import React from 'react';
import { IoMdPerson } from "react-icons/io";  
import { MdEmail } from "react-icons/md";      
import { FaLock } from "react-icons/fa";   

const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen text-white">
      <div className="bg-black flex text-center p-[10px] flex-col rounded-md p-[30px]">
        <div className="text-2xl text-white font-semibold">Sign in</div>

        <div className="flex flex-row pt-5">
          <IoMdPerson className="text-white text-[20px] mt-3 absolute" />
          <input
            type="name"
            placeholder="Username"
            className="w-full bg-transparent border border-0 border-b-2 border-gray-500 relative pl-8 pt-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:outline-none pt-3"
          />
        </div>

        <div className="flex flex-row pt-8">
          <MdEmail className="text-white text-[20px] mt-2 absolute" />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border border-0 border-b-2 relative pl-8 pt-2"
          />
        </div>

        <div className="flex flex-row pt-8">
          <FaLock className="text-white text-[20px] absolute mt-2" />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border border-0 border-b-2 relative pl-8 pt-2"
          />
        </div>

        <div>
          <button className=" border border-2  border-gray-500 mt-6 p-[6px] rounded-sm">SignUp</button>
        </div>

        <div className="text-gray flex flex-row pt-6">
          <p className="text-gray-600">Already have an account?</p>
          <p className="text-white pl-2 cursor-pointer"> SignIn</p>
        </div>
      </div>
    </div>
  );
};

export default Register;