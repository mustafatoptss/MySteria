import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FirstScreen.css';
import spotifyLogo from '../images/spotify.png';
import instagramLogo from '../images/instagram.png';

function FirstScreen() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Giriş durumu (örnek)

  // Çıkış yap fonksiyonu
  const handleLogout = () => {
    // Burada gerçek çıkış işlemini yapmalısınız, örn:
    // localStorage.clear();
    // veya auth context logout fonksiyonu çağrılabilir
    setIsLoggedIn(false);
    navigate('/login'); // Çıkış yapınca login sayfasına yönlendir
  };

  return (
    <div className="firstscreen-background">
      <div className='text-center'>Test Aşaması v1.0.0</div>
      <div className="header-overlay">
        <div className="left-logos">
         <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
  <img src={spotifyLogo} className='logo' alt="Spotify Logo" />
</a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
  <img src={instagramLogo} className='logo2' alt="Spotify Logo" />
</a>
        </div>

     
      </div>

      <div className="leading-32 text-7xl mt-10 text-amber-50 ml-15">
        Sessiz sokaklar <br />
        karanlık sırlar
        <br />
        Gölge peşinde <br />
        iz süren MySteria dedektifleri
      </div>
      <div>
        <p className="ml-15 text-amber-50 text-2xl mb-10">
          Faili meçhul davaları kapatmak için geliyoruz...
        </p>
        <p className="ml-15 text-amber-50 text-2xl">
          Karanlık sokaklarda yankılanan sessiz adımlar… <br />
          Her detay bir sır, her bakışta bir şüphe gizli <br />
          MySteria ekibi, gerçeğin izini sürmek için burada.
        </p>
      </div>

      {/* Eğer giriş yapılmamışsa "Davalar" butonu gösterilsin */}
      {!isLoggedIn && (
        <div className="playbtn">
          <button onClick={() => navigate('/game')}>Davalar</button>
        </div>
      )}
    </div>
  );
}

export default FirstScreen;
