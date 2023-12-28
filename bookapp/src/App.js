
import React, { useState, useEffect, createContext } from "react";
import {Routes, Route } from 'react-router-dom';
import app from "./firebase/Firebase";


import HomePage from "./pages/homepage/HomePage";
import Login from "./pages/loginpage/Login";
import SignUp from "./pages/signup-page/Signup";




const App = () => {
   
    return(
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                    </Routes> 
                
    )
}

export default App;