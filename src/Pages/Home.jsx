import React from "react";
import Header from "../components/Header";
import Landing from "../components/Landing";
import Job from "../components/Job";
import Footer from "../components/Footer";

function Home() {
 return (
  <div className="bg-primary">
   <Landing />
   <Job />
  </div>
 );
}

export default Home;
