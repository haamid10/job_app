import React from "react";
import { Link } from "react-router-dom";

function Job() {
 return (
  <div>
   <div className="bg-primary p-5">
    <Link to="/" className="font-bold  mb-20 mx-60">
     ← Back
    </Link>
    <form className="bg-white rounded-lg shadow-lg w-[35rem] mx-auto p-10">
     <h1 className="font-bold text-2xl mb-2">Post New Job</h1>
     <p className="font-light text-xs">
      The following is required and will be shared with opeepi
     </p>

     {/* Name */}
     <div className="mt-5 mb-3">
      <p className="font-light mb-2 text-xs text-gray-400">Job Title</p>
      <input
       type="text"
       className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
       name=""
       id=""
       placeholder="Enter your job title"
      />
     </div>

     {/* Email */}
     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Job Description</p>
      <textarea
       type="text"
       name=""
       id=""
       placeholder="Enter job description"
       className="w-full p-1.5 rounded-md bg-[#f6f6f6] h-64"></textarea>
     </div>

     {/* Job Type */}
     <div className="flex justify-between mt-5 mb-3">
      <div>
       <p className="font-light text-xs text-gray-400 mb-3">Job Type</p>
       <select
        className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
        placeholder="Enter job type">
        <option value="" disabled selected>
         Select your option
        </option>
        <option>Full-Time</option>
        <option>Part-Time</option>
        <option>Internship</option>
       </select>

       {/* Experience */}
      </div>
      <div>
       <p className="font-light text-xs text-gray-400 mb-3">Experience</p>
       <select
        className="w-56 p-1.5 rounded-md bg-[#f6f6f6]"
        placeholder="Enter job experience">
        <option value="" disabled selected>
         Select your option
        </option>
        <option>Junior</option>
        <option>Senior</option>
        <option>Expert</option>
       </select>
      </div>
     </div>

     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Job Location</p>
      <select type="password" className="w-full p-1.5 rounded-md bg-[#f6f6f6]">
       <option value="" disabled selected>
        Select your option
       </option>
       <option>Onsite</option>
       <option>Remote</option>
      </select>
     </div>

     <div className="flex justify-center">
      <button className="px-10 py-3 mt-10  bg-black text-white rounded-md">
       Post Job
      </button>
     </div>
    </form>
   </div>
  </div>
 );
}

export default Job;