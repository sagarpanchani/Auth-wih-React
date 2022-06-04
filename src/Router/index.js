import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link,
  Redirect,
} 
from "react-router-dom";
import Login from "../pages/Login";
import Signup from "../pages/signup"
 const Routercontainer=()=>{
  return (
    <Router>
    <Routes>
        
        
          <Route path="/" element={<Signup  /> } />
       
       
   
          <Route path="/Login" element={<Login />} />/
          
   </Routes>
    </Router>
  );
}
export default Routercontainer;