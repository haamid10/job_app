import { useState , useEffect } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePost from "./Pages/SinglePost";
import NotFound from "./Pages/NotFound";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserContext } from "./context/userContect";
function App() {
  const [user , setUser] = useState(false)
  const [loading , setLoading] = useState(true)
  useEffect(()=>{
    const token = localStorage.getItem("token");
    if(token !== null) {
      setUser(true)
    }
    setLoading(false)
  })

  if(loading) { 
    return  <div> loading.....</div>;
  }
 return (
 <div>
  <UserContext.Provider  value={{user ,setUser}}>

     <BrowserRouter>
   <Header  user={user}/>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Signup />} />
    <Route path="/single" element={<SinglePost />} />
    <Route path="*" element={<NotFound />} />
   </Routes>
   <Footer />
  </BrowserRouter>

  <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
   />
  </UserContext.Provider >

 </div>
 );
}

export default App;
