import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import Login from './pages/Login/index';
import Register from './pages/Register/index';
import ForgotPassword from './pages/ForgotPassword/index';
import ChangePassword from './pages/ChangePassword/index';

import ExemploComponent from "./components/ExemploComponent";

function App() {

  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/forgotpassword" element={<ForgotPassword />}/>
                <Route path="/changepassword" element={<ChangePassword />}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
