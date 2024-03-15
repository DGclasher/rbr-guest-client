import React from 'react';
import Job from './pages/Job';
import Home from './pages/Home';
import Careers from './pages/Careers';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Application from './pages/Application';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/job/:id" element={<Job />} />
          <Route path="/apply/:id" element={<Application />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
