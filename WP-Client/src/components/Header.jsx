import React ,{useContext}from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context/userContect";
import mailcamp from "../assets/mailchimp.jpeg";
function Header() {
    const { user } = useContext(UserContext);
 return (
  <div className="flex justify-between items-center mx-32 my-5">
   <div className="logo">
    <h1 className="font-bold text-2xl">WP-Jobs</h1>
   </div> 
   {user === true ? ( 
    <div className="flex gap-5 items-center">
    <div className="mx-auto">
        <img src={mailcamp} alt="" srcset="" className="w-16 rounded-full" />
        <p className="font-light mt-3">Hi MailCamp</p>
    </div>
    <Link to="/register" className="px-10 py-2 bg-black text-white rounded-md">
        Logout
    </Link>
    </div> 

    ):(

    <div className="flex gap-5 items-center">
    <Link to="/login">Login</Link>
    <Link to="/register" className="px-10 py-2 bg-black text-white rounded-md">
       Signup
    </Link>
    </div>

   )
   
}
   

   {/* <div className="flex gap-5 items-center">
    <div className="mx-auto">
     <img src={mailcamp} alt="" srcset="" className="w-16 rounded-full" />
     <p className="font-light mt-3">Hi MailCamp</p>
    </div>
    <Link to="/register" className="px-10 py-2 bg-black text-white rounded-md">
     Logout
    </Link>
   </div> */}
  </div>
 );
}

export default Header;
