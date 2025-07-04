import React from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../images/Screen2background.png';
import left from '../images/right-bottom2.PNG';
import bg4 from '../images/bg-3.jpeg';
import './SecondScreen.css';

function SecondScreen() {
  const navigate = useNavigate();

  return (
    <div className="secondscreen-container flex flex-col h-screen bg-black text-white text-base">
      {/* ÜST: Üst bölümler (yarı yarıya) */}
      <div className="secondscreen-top flex flex-col md:flex-row md:h-1/2 h-auto">
        {/* Sol üst */}
        <div
          onClick={() => navigate('./game')}
          className="w-full md:w-1/2 flex items-center justify-center px-6 cursor-pointer hover:scale-105 transition-transform duration-300 bg-black py-8 md:py-0"
        >
          <div>
            <h1 className="text-center text-3xl font-bold mb-4 tracking-wide">
              MySteria
            </h1>
            <p className="text-center text-xl opacity-90">
              Zekanızı test edin, suçluları yakalayın!
            </p>
          </div>
        </div>

        {/* Sağ üst */}
       <div
  className="secondscreen-right w-full md:w-1/2 relative bg-cover bg-no-repeat bg-center min-h-[100vh] md:min-h-screen"
  style={{
    backgroundImage: `url(${bg4})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    backgroundAttachment: 'scroll', // İsteğe bağlı: 'fixed' yerine scroll önerilir
  }}
>
          <div className="absolute inset-0 bg-black opacity-20"></div>
           <div className="relative flex flex-col items-center justify-center md:justify-start p-4 md:p-6 h-full md:pt-20"> 
            <div className="space-y-4 md:space-y-8 max-w-2xl text-center">
              {/* Madde 1 */}
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer mt-4 md:mt-0">
                <div className="text-2xl mb-2 md:mb-4">🕵️</div>
                <h2 className="text-lg font-bold mb-1 md:mb-2">EKİBİNİ KUR, HAZIRLIK YAP</h2>
                <p className="text-base leading-normal">
                  En kısa sürede davayı kapatmak için seçkin bir ekip kurun, uygun bir
                  mekanda ve karakterinize uygun şekilde giyinerek hazırlanın.
                </p>
              </div>

              {/* Madde 2 */}
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="text-2xl mb-2 md:mb-4">📜</div>
                <h2 className="text-lg font-bold mb-1 md:mb-2">SENARYOYU SEÇ</h2>
                <p className="text-base leading-normal">
                  Birbirinden benzersiz, heyecanlı ve gerilimli davalar sizi bekliyor.
                  İster tek başınıza, ister ekibinizle zamana karşı yarışın.
                </p>
              </div>

              {/* Madde 3 */}
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="text-2xl mb-2 md:mb-4">🔍</div>
                <h2 className="text-lg font-bold mb-1 md:mb-2">DAVA DOSYALARINI İNCELE</h2>
                <p className="text-base leading-normal">
                  Çözülemeyen sırlar, şifreler ve ipuçları. Tüm dosyalar PDF olarak sizde.
                  Hiçbir detayı atlamadan araştırma yapın.
                </p>
              </div>

              {/* Madde 4 */}
              <div className="flex flex-col items-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                <div className="text-2xl mb-2 md:mb-4">⚖️</div>
                <h2 className="text-lg font-bold mb-1 md:mb-2">KATİLİ BUL!</h2>
                <p className="text-base leading-normal">
                  "Ne? Nerede? Ne zaman? Neden? Nasıl? ve Kim?" sorularını yanıtlayarak adaletin
                  yerini bulmasını sağlayın.
                </p>
              </div>

             
            </div>
          </div>
        </div>
      </div>

      {/* ALT: Sol alt - Görsel ve buton */}
      <div className="secondscreen-bottom flex h-auto md:h-1/2">
        <div
          className="w-full md:w-1/2 bg-cover bg-center bg-no-repeat flex items-center justify-center hover:scale-105 transition-transform duration-300 min-h-[30vh] md:min-h-full"
          style={{
            backgroundImage: `url(${left})`,
          }}
        >
          <button
            className="bg-transparent hover:bg-red-700 text-white text-xl md:text-2xl font-bold py-3 px-8 md:py-4 md:px-10 rounded-xl shadow-lg transition-colors duration-300"
            onClick={() => navigate('/game')}
          >
            Oyuna Başla
          </button>
        </div>
        {/* Sağ boşluk (gerekirse içerik eklenebilir) */}
        <div className="hidden md:block w-1/2" />
      </div>
    </div>
  );
}

export default SecondScreen;