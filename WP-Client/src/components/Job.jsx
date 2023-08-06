import React from "react";
import JobCard from "./JobCard";
import Filter from "./Filter";
import { useState,useEffect} from "react";
import axios from "axios";

function Job() {
    const [jobs, setPosts] = useState({})
    useEffect(()=>{
        axios.get("http://localhost:8000/post/")
        .then((res)=> {
            setPosts(res.data.message)
            console.log(res.data.message)
        })
    },[])
 return (
  <div>
   <div className="flex mt-32 justify-between mx-60 items-start">
    <div className="">
     <h1 className="mb-5 text-center font-bold text-xl">
      Job Opportunities <span className="font-light text-gray-400">{jobs.length}</span>
     </h1>
    
           
     
     {/* <JobCard />
     <JobCard />
     <JobCard />
     <JobCard /> */}
    </div>
    <div className="">
     <Filter />
    </div>
   </div>
  </div>
 );
}

export default Job;
