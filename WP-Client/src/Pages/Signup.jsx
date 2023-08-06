import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useState } from "react";
import { toast } from "react-toastify"; 


function Signup() {
    const [user ,setUser] = useState({})

    const handleChange = (e) => {
       try {
        e.preventDefault();
        axios
        .post("http://localhost:8000/user/signup", user)
        .then((res)=>{
            toast.success(res.data.message)
            setUser("")
        })
       } catch (error) {
        toast.error(error.response.data.message)
       }
    }
 return (
  <div className="bg-primary p-5">
   <Link to="/" className="font-bold my-8 mx-80">
    ← Back
   </Link>
   <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
    <h1 className="font-bold text-2xl mb-2">Register New User</h1>
    <p className="font-light text-xs">
     The following is required and will be shared with open
    </p>
    <div className="mt-5 mb-3">
     <p className="font-light mb-2 text-xs text-gray-400">Full Name</p>
     <input
      type="text"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
      name=""
      id=""
      placeholder="Enter your full name"
      onChange={(e)=>{setUser({...user,name:e.target.value})}}
     />
    </div>

    <div>
     <p className="font-light text-xs text-gray-400 mb-3">Email</p>
     <input
      type="text"
      name=""
      id=""
      placeholder="Email address"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
      onChange={(e)=>{setUser({...user,email:e.target.value})}}
     />
    </div>
    <div className="flex justify-between mt-5 mb-3">
     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Password</p>
      <input
        type="password"
        className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
        name=""
        id=""
        placeholder="Enter your password"
        onChange={(e)=>{setUser({...user,password:e.target.value})}}
      />
     </div>
     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Confirm Password</p>
      <input
       type="password"
       className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
       name=""
       id=""
       placeholder="Re-Enter your password again"
      onChange={(e)=>{setUser({...user,confirmPassword:e.target.value})}}

      />
     </div>
    </div>

    <div className="mt-5 mb-3">
     <p className="font-light mb-2 text-xs text-gray-400">Bio</p>
     <input
      type="text"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
      name=""
      id=""
      placeholder="Write info about yourself"
      onChange={(e)=>{setUser({...user,bio:e.target.value})}}

     />
    </div>

    <div className="mt-5 mb-3">
     <p className="font-light mb-2 text-xs text-gray-400">Company</p>
     <input
      type="text"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
      name=""
      id=""
      placeholder="Enter your company name"
      onChange={(e)=>{setUser({...user,company:e.target.value})}}

     />
    </div>

    <div>
     <div class="flex items-center justify-center w-[30rem]">
      <label
       for="dropzone-file"
       class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 ">
       <div class="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
         class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 20 16">
         <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
         />
        </svg>
        <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
         <span class="font-semibold">Click to upload</span> or drag and drop
        </p>
        <p class="text-xs text-gray-500 dark:text-gray-400">
         SVG, PNG, JPG or GIF (MAX. 800x400px)
        </p>
       </div>
       <input id="dropzone-file" type="file" class="hidden" />
      </label>
     </div>
    </div>
    <div className="flex justify-center">
     <button className="px-10 py-3 mt-10  bg-black text-white rounded-md" onClick={handleChange}>
      Sign up
     </button>
    </div>
   </form>
  </div>
 );
}

export default Signup;
