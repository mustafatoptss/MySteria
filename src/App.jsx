import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { app } from './firebase';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollTop';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contanct';
import BizKimiz from './pages/BizKimiz';
import Vizyon from './pages/Vizyon';
import Ekibimiz from './pages/Ekibimiz';
import HowToPlay from './pages/HowToPlay';
import LoginPage from './pages/LoginPage';
import GameScreen from './pages/GameScreen';
import Profile from './components/Profile';
import Duzenle from './pages/Duzenle';
import ProtectedRoute from './components/ProtectedRoutes';

const auth = getAuth(app);

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Kullanıcı giriş yaptı:", user.email);
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || user.email.split('@')[0]
        });
      } else {
        console.log("Kullanıcı çıkış yaptı");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  return (
    <Router>
      <Navbar user={user} onLogout={handleLogout} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimizda/biz-kimiz" element={<BizKimiz />} />
        <Route path="/hakkimizda/vizyon" element={<Vizyon />} />
        <Route path="/hakkimizda/ekibimiz" element={<Ekibimiz />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route 
          path="/login" 
          element={<LoginPage setUser={setUser} />} 
        />
        <Route path="/profile" element={<Profile user={user} />} />
      <Route 
  path="/game" 
  element={
    <ProtectedRoute user={user}>
      <GameScreen user={user} />
    </ProtectedRoute>
 }
/>
        <Route path="/duzenle" element={<Duzenle user={user} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;