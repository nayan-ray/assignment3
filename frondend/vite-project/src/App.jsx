import { useState } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Blog from './page/Blog';
import About from './page/About';
import Contack from './page/Contack';
import Dashboard from './page/Dashboard';
import Login from './page/Login';
import Navbar from './components/Layout/Navbar';
import Service from './page/Service';


function App() {


  return (
     <BrowserRouter>
        <Navbar />
           <Routes>
               <Route path="/" element={<Home />} />
               <Route path="/blog" element={<Blog />} />
               <Route path="/about" element={<About />} />
               <Route path="/contact" element={<Contack />} />
               <Route path="/dashboard" element={<Dashboard />} />
               <Route path="/login" element={<Login />} />
               <Route path="/service" element={<Service />} />
           </Routes>
     </BrowserRouter>
  );
}

export default App;
