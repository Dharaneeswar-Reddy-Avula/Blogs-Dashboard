import React from 'react'
import { IoMdPerson } from "react-icons/io";
const Register = () => {
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="bg-black flex text-center p-[10px] flex-col">
            <div className="text-xl text-white font-semibold">Register</div>
            
            <div className="relative flex flex-row "><IoMdPerson className="text-white text-[20px]"/>
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent text-white placeholder-gray-400 focus:outline-none border-none"
          />
          <div className="absolute left-0 bottom-0 w-full h-[2px] bg-gray-500 peer-focus:bg-blue-500 transition-all duration-300"></div>
        </div>

        </div>

    </div>
  )
}

export default Register