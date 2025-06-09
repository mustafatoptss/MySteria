// src/App.js

import React, { useEffect } from 'react';
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
import Ekibimiz from './pages/Ekibimiz';
import HowToPlay from './pages/HowToPlay';
import LoginPage from './pages/LoginPage';
import GameScreen from './pages/GameScreen';
import Profile from './components/Profile';
import Duzenle from './pages/Duzenle';
import ProtectedRoute from './components/ProtectedRoutes';
import Answer from './pages/Answer';
import PayScreen from './pages/PayScreen';

// Context
import { UserProvider, useUser } from './context/UserContext';

const auth = getAuth(app);

function AppContent() {
  const { setUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Kullanıcı giriş yaptı:", user.email);
        setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || user.email.split('@')[0],
          photoURL: user.photoURL || '',
        });
      } else {
        console.log("Kullanıcı çıkış yaptı");
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, [setUser]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Çıkış hatası:", error);
    }
  };

  return (
    <Router>
      <Navbar onLogout={handleLogout} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimizda/biz-kimiz" element={<BizKimiz />} />
        <Route path="/hakkimizda/ekibimiz" element={<Ekibimiz />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/answer" element={<Answer />} />
        <Route path="/pay" element={<PayScreen />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <GameScreen />
            </ProtectedRoute>
          }
        />
        <Route path="/duzenle" element={<Duzenle />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default function App() {
  return (
    <UserProvider>
      <AppContent />
    </UserProvider>
  );
}
