import { Route, Routes } from "react-router-dom";

import React from 'react';
import './index.css';

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";
import SkillPage from "./pages/SkillPage";
import ContactPage from "./pages/ContactPage";







const App = () => {
  return (

    <div className='h-screen w-screen bg-gray-900 text-gray-100 overflow-auto'>


      <Navbar />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/projects' element={<ProjectPage />} />
        <Route path='/skills' element={<SkillPage />} />
        <Route path='/contact' element={<ContactPage />} />

      </Routes>





      <Footer />

    </div>
  );
};

export default App;

