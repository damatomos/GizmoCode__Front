import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

import Home from './pages/Home/index';
import Login from './pages/Login/index';

import ExemploComponent from "./components/ExemploComponent";

function App() {

  return (
    <div className="App">

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>

    </div>
  )
}

export default App
