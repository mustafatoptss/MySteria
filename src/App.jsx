import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contanct';

// Hakkımızda alt sayfaları
import BizKimiz from './pages/BizKimiz';
import Vizyon from './pages/Vizyon';
import Ekibimiz from './pages/Ekibimiz';
import HowToPlay from './pages/HowToPlay';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />

        {/* Hakkımızda sayfaları */}
        <Route path="/hakkimizda/biz-kimiz" element={<BizKimiz />} />
        <Route path="/hakkimizda/vizyon" element={<Vizyon />} />
        <Route path="/hakkimizda/ekibimiz" element={<Ekibimiz />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
