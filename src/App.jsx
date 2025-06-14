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
import Contact from './pages/Contanct';      // Düzeltme: "Contanct" -> "Contact"
import BizKimiz from './pages/BizKimiz';

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
import SisliSehir from './cases/SisliSehir';
import GizemliMektup from './cases/GizemliMektup';
import KayipMucevher from './cases/KayipMucevher';
import KaybolanDedektif from './cases/KaybolanDedektif';


const auth = getAuth(app);

function AppContent() {
  const { setUser } = useUser();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Kullanıcıyı yeniden yükle (emailVerified durumu için)
        await user.reload();
        const updatedUser = auth.currentUser;
        
        if (updatedUser.emailVerified) {
          console.log("Doğrulanmış kullanıcı giriş yaptı:", updatedUser.email);
          setUser({
            uid: updatedUser.uid,
            email: updatedUser.email,
            displayName: updatedUser.displayName || updatedUser.email.split('@')[0],
            photoURL: updatedUser.photoURL || ''
          });
        } else {
          console.log("Doğrulanmamış kullanıcı oturum açmaya çalıştı");
          await signOut(auth);
          setUser(null);
        }
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
      <Navbar onLogout={handleLogout} />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/iletisim" element={<Contact />} />
        <Route path="/hakkimizda/biz-kimiz" element={<BizKimiz />} />
        <Route path="/howtoplay" element={<HowToPlay />} />
        <Route path="/pay" element={<PayScreen />} />
        <Route path="/login" element={<LoginPage setUser={setUser} />} />



        <Route path="/profile" element={<Profile />} />       <Route path="/cases/kayip-mucevher" element={<KayipMucevher />} />




        <Route path="/cases/sisli-sehir-cinayeti" element={<SisliSehir />} />
        <Route path="/cases/gizemli-mektup" element={<GizemliMektup />} />
        <Route path="/cases/son-vaka-kaybolan-dedektif" element={<KaybolanDedektif />} />
        <Route
          path="/game"
          element={
            <ProtectedRoute>
              <GameScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/answer"
          element={
            <ProtectedRoute>
              <Answer />
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
