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
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import GameScreen from './pages/GameScreen';
import ScrollToTop from './components/ScrollTop';

function App() {
  return (
    <Router>
      <Navbar />
       <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />

        {/* Hakkımızda sayfaları */}
        <Route path="/hakkimizda/biz-kimiz" element={<BizKimiz />} />
        <Route path="/hakkimizda/vizyon" element={<Vizyon />} />
        <Route path="/hakkimizda/ekibimiz" element={<Ekibimiz />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
              <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
          <Route path="/game" element={<GameScreen />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
