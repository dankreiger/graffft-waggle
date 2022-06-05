import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import { Home } from './pages/Home/Home';
import { Projects } from './pages/Projects/Projects';

export const AppRoutes = () => (
  <Routes>
    <Route path="/projects" element={<Projects />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/" element={<Home />} />
  </Routes>
);
