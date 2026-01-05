import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Reach from './pages/Reach';
import Education from './pages/Education';
import Healthcare from './pages/Healthcare';
import WomenEmpowerment from './pages/WomenEmpowerment';
import Livelihood from './pages/Livelihood';
import DisasterResponse from './pages/DisasterResponse';
import Donate from './pages/Donate';
import Contact from './pages/Contact';
import Campaigns from './components/Campaigns';
import ShikshaNaRuke from './pages/ShikshaNaRuke';
import HealthCannotWait from './pages/HealthCannotWait';
import SheCanFly from './pages/SheCanFly';
import Swabhiman from './pages/Swabhiman';
import TayyariKalKi from './pages/TayyariKalKi';

import ScrollToTop from './components/ScrollToTop'; // import

function App() {
  return (
    <Layout>
      <ScrollToTop />   {/* 🔹 Add here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/impact" element={<Impact />} />
        <Route path="/reach" element={<Reach />} />
        <Route path="/education" element={<Education />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/women-empowerment" element={<WomenEmpowerment />} />
        <Route path="/livelihood" element={<Livelihood />} />
        <Route path="/disaster-response" element={<DisasterResponse />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/campaigns/shiksha-na-ruke" element={<ShikshaNaRuke />} />
        <Route path="/campaigns/health-cannot-wait" element={<HealthCannotWait />} />
        <Route path="/campaigns/she-can-fly" element={<SheCanFly />} />
        <Route path="/campaigns/swabhiman" element={<Swabhiman />} />
        <Route path="/campaigns/tayyari-kal-ki" element={<TayyariKalKi />} />

      </Routes>
    </Layout>
  );
}

export default App;
