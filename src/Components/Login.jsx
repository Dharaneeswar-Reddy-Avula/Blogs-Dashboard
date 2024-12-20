import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { FaLock } from "react-icons/fa";   
const Login = () => {
  return (
   <div className="flex justify-center items-center h-screen text-white">
         <div className="bg-black flex text-center p-[10px] flex-col rounded-md p-[30px]">
           <div className="text-2xl text-white font-semibold">Sign up</div>
   
           <div className="flex flex-row pt-5">
             <IoMdPerson className="text-white text-[20px] mt-3 absolute" />
             <input
               type="name"
               placeholder="Username"
               className="w-full bg-transparent border border-0 border-b-2 border-gray-500 relative pl-8 pt-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-900 focus:outline-none pt-3"
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
           <div className="flex justify-end text-gray-300 pt-3 cursor-pointer">Forgot password?</div>
   
           <div>
             <button className=" border border-2  border-gray-500 mt-4 p-[6px] pl-4 pr-4 rounded-sm">Login</button>
           </div>
   
           <div className="text-gray flex flex-row pt-6">
             <p className="text-gray-600">Don't have an account?</p>
             <p className="text-white pl-2 cursor-pointer"> Sign up</p>
           </div>
         </div>
       </div>
     );
   };
export default Login