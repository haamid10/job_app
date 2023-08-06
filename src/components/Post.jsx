import React from "react";
import PostDesc from "./PostDesc";
import PostProfileCard from "./PostProfileCard";

function Post() {
 return (
  <div>
   <h1 className="font-bold my-8 mx-80">← Back</h1>
   <div className="flex items-start justify-around mx-48 mt-24">
    <PostDesc />
    <PostProfileCard />
   </div>
  </div>
 );
}

export default Post;
