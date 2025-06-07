import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './FirstScreen.css';
import spotifyLogo from '../images/spotify.png';
import instagramLogo from '../images/instagram.png';

function FirstScreen() {
  const navigate = useNavigate();
  return (
    <div className="firstscreen-background">
      <div className="header-overlay">
        <div className="left-logos">
          <img src={spotifyLogo} alt="Spotify Logo" className="logo" />
          <img src={instagramLogo} alt="Instagram Logo" className="logo" style={{ height: "60px", marginTop: "8px" }} />
        </div>

        <div className="right-buttons">
          <Link to="/register">
            <button className="btn">Kayıt Ol</button>
          </Link>
          <Link to="/login">
            <button className="btn">Giriş Yap</button>
          </Link>
        </div>
      </div>

      <div className='leading-32 text-8xl mt-10 text-amber-50 ml-15'>
        En büyük <br />
        gizemleri çözen<br />
        seçkin ekip; <br />
        MySteria dedektifleri
      </div>
      <div>
        <p className='ml-15 text-amber-50 text-2xl mb-10'>Faili meçhul davaları kapatmak için geliyoruz...</p>
        <p className='ml-15 text-amber-50 text-2xl'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
          Ipsum quaerat eum beatae, commodi cupiditate odio <br />
          nemo consectetur labore nisi asperiores?
        </p>
      </div>
      <div className='playbtn'>
      <button onClick={()=>navigate('/game')}>Davalar</button>
      </div>
    </div>
  );
}

export default FirstScreen;
