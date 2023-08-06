import React from "react";
import mailcamp from "../assets/mailchimp.jpeg";

function PostProfileCard() {
 return (
  <div className="flex flex-col items-center bg-white shadow-lg border-2 border-black px-3 py-2 rounded-lg">
   <img src={mailcamp} alt="" className="w-16 rounded-full" />
   <p className="text-gray-300 font-light">Job By</p>
   <h1 className="font-bold my-3">Mailchimp ↗</h1>
   <p className="text-8 font-light">
    Mailchimp is an all-in-one Marketing Platform <br />
    for small business.
   </p>
  </div>
 );
}

export default PostProfileCard;
