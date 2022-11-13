import React,{useState,createContext} from 'react'
import './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import { GlobalStateProvider } from "../src/components/colorContext/GlobalStateProvider";




function App() {

  return (
    <div className="App">
      <GlobalStateProvider>
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<LoginPage />}/>
              <Route path="/home" element={<Home />} />
            </Routes>
        </BrowserRouter>
      </GlobalStateProvider>

    </div>
  );
}

export default App;
