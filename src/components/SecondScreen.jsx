import React from 'react';
import img from '../images/Screen2background.png';
import left from '../images/right-bottom2.PNG';
import bg4 from '../images/bg-3.jpeg'
import { useNavigate } from 'react-router-dom';

function SecondScreen() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* ÜST: Sol ve sağ bölümler */}
      <div className="flex h-[700px]">
        {/* Sol üst - Oyun açıklaması */}
        <div style={{cursor: 'pointer'}} onClick={()=>navigate('./game')} className="w-1/2 flex items-center justify-center transform transition-transform duration-300 hover:scale-105 bg-black-gradient-to-r from-black to-[#111111] px-12">
          <div className="text-white">
            <h1 className="text-center text-5xl font-bold mb-8 tracking-wider">DEDEKTİF OYUNU</h1>
            <p className="text-center text-3xl opacity-90">Zekanızı test edin, suçluları yakalayın!</p>
          </div>
        </div>

        {/* Sağ - Fotoğraf üzerine metinler */}
        <div
          className="w-1/2 relative bg-cover bg-no-repeat bg-center"
          style={{
            backgroundImage: `url(${bg4})`,
            height: '100vh',
          }}
        >
          {/* Yarı şeffaf overlay */}
          <div className="absolute inset-0 bg-black opacity-20"></div>
          
          {/* Ortalanmış içerik */}
          <div className="relative h-full flex flex-col items-center justify-center text-white p-10">
            <div className="max-w-2xl space-y-12 text-center">
              
              {/* Madde 1 */}
              <div  className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="text-5xl mb-6">🕵️</div>
                <h2 className="text-3xl font-bold mb-4">EKİBİNİ KUR, HAZIRLIK YAP</h2>
                <p className="text-xl leading-relaxed">
                  En kısa sürede davayı kapatmak için seçkin bir ekip kurun, 
                  uygun bir mekanda ve karakterinize uygun şekilde giyinerek hazırlanın.
                </p>
              </div>

              {/* Madde 2 */}
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="text-5xl mb-6">📜</div>
                <h2 className=" text-3xl font-bold mb-4  ">SENARYOYU SEÇ</h2>
                <p className="text-xl leading-relaxed">
                  Birbirinden benzersiz, heyecanlı ve gerilimli davalar sizi bekliyor. 
                  İster tek başınıza, ister ekibinizle zamana karşı yarışın.
                </p>
              </div>

              {/* Madde 3 */}
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="text-5xl mb-6">🔍</div>
                <h2 className="text-3xl font-bold mb-4">DAVA DOSYALARINI İNCELE</h2>
                <p className="text-xl leading-relaxed">
                  Çözülemeyen sırlar, şifreler ve ipuçları. Tüm dosyalar PDF olarak sizde. 
                  Hiçbir detayı atlamadan araştırma yapın.
                </p>
              </div>

              {/* Madde 4 */}
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="text-5xl mb-6">⚖️</div>
                <h2 className="text-3xl font-bold mb-4">KATİLİ BUL!</h2>
                <p className="text-xl leading-relaxed">
                  "Ne? Nerede? Ne zaman? Neden? Nasıl? ve Kim?" sorularını yanıtlayarak 
                  adaletin yerini bulmasını sağlayın.
                </p>
              </div>

              {/* Çağrı cümlesi */}
              <div className="pt-10 ">
                <p className="text-4xl italic font-bold tracking-wider ">GERÇEK DEDEKTİF SİZ MİSİNİZ?</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ALT: Sol taraftaki boş alan */}
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat flex items-center justify-center transform transition-transform duration-300 hover:scale-105"
        style={{
          backgroundImage: `url(${left})`,
          height: 'calc(100vh - 300px)',
        }}
      >
        {/* Oyna butonu */}
        <button
          className="bg-transparent hover:bg-red-700 text-white text-4xl font-bold py-6 px-16 rounded-xl shadow-lg transition-colors duration-300"
          onClick={() => navigate('/game')} // Burayı kendi yönlendirmene göre değiştirebilirsin
        >
          Oyuna Başla
        </button>
      </div>
    </div>
  );
}

export default SecondScreen;
