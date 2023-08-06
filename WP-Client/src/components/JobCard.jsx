import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";
import { FaCalendarWeek, FaSignal, FaComputerMouse } from "react-icons/fa6";

function JobCard({post}) {
 return (
  <div className="w-[800px] bg-white shadow-md mb-5 px-4 py-2 rounded-md">
   <div className="flex items-center justify-between">
    <div className="flex gap-5 items-center mb-2">
     <div className="rounded-full">
      <img src={mailcamp} alt="" srcset="" className="w-16 rounded-full" />
     </div>
     <div>
      <p>{post.jobTitle}</p>
      <h1>{post.jobDesc}</h1>
     </div>
    </div>
    <div>
     <p>1d ago</p>
    </div>
   </div>
   <div className="flex gap-5 mx-2 mt-5">
    <div className="flex items-center gap-2">
     <FaCalendarWeek />
     <p>Full-time</p>
    </div>
    <div className="flex items-center gap-2">
     <FaSignal />
     <p>Senior</p>
    </div>
    <div className="flex items-center gap-2">
     <FaComputerMouse />
     <p>Remote</p>
    </div>
   </div>
  </div>
 );
}

export default JobCard;
