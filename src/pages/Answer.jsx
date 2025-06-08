import React, { useState } from 'react';
import letter from '../images/letter.png';

function Answer() {
  const [openedEnvelope, setOpenedEnvelope] = useState(null);

  const envelopes = [
    { id: 1, title: "Dava 1", answer: "Katil, kurbanın en yakın arkadaşıydı. Saat 23:00'te güvenlik kamerasında görülmüştür." },
    { id: 2, title: "Dava 2", answer: "Kayıp mücevherler, bahçedeki ağaç kovuğunda bulundu. Hırsız bahçıvanın yardımcısı çıktı." },
    { id: 3, title: "Dava 3", answer: "Zehir, kurbanın en sevdiği kahve markasına enjekte edilmişti. Katil kahve satıcısıydı." },
    { id: 4, title: "Dava 4", answer: "Şantajcı, kurbanın eski üniversite oda arkadaşı çıktı. Aralarındaki eski bir fotoğrafı kullanmıştı." }
  ];

  const handleEnvelopeClick = (id) => {
    setOpenedEnvelope(openedEnvelope === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-12 px-4 font-[serif]">
      <h1
        style={{
          textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000',
        }}
        className="text-7xl font-bold text-center mb-12 text-red-950 font-[Special+Elite]"
      >
        Davalar Arşivi
      </h1>

      <div className="flex justify-center items-center gap-8 max-w-full mt-36 mx-auto flex-wrap">
        {envelopes.map((env) => (
          <div
            key={env.id}
            style={{ width: '500px', height: '300px' }}
            className="relative cursor-pointer transition-all duration-300"
            onClick={() => handleEnvelopeClick(env.id)}
          >
            {/* Zarf PNG */}
            <img
              src={letter}
              alt="Zarf"
              className={`absolute top-0 left-0 w-full h-full object-contain transition-all duration-500 
                ${openedEnvelope === env.id ? 'opacity-50' : 'opacity-100'}`}
              style={{ zIndex: 2, objectFit: 'cover' }}
            />

            {/* Zarf iç kısmı */}
            <div
              className={`absolute bottom-0 w-full rounded-b-lg border border-stone-600 transition-all duration-500 
                ${openedEnvelope === env.id ? 'h-1/2' : 'h-full'}`}
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/old-paper.png')`,
                backgroundColor: '#e6ccb2',
                backgroundBlendMode: 'multiply',
                zIndex: 1
              }}
            ></div>

            {/* Kağıt çıkışı */}
            <div
              className={`absolute w-11/12 shadow-lg rounded-lg p-4 border border-stone-400  
                transition-all duration-500 ${openedEnvelope === env.id ?
                  'top-0 h-64 opacity-100' :
                  'top-1/2 h-0 opacity-0'}`}
              style={{
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 3,
                backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                backgroundColor: '#f3eacb',
                backgroundBlendMode: 'multiply'
              }}
            >
              <h3 className="text-red-950 font-bold text-xl mb-2 font-[Special+Elite]">{env.title} Çözümü</h3>
              <p className="text-stone-700 text-m font-[serif]">{env.answer}</p>
              <div className="absolute bottom-2 right-2 text-xs text-gray-500">
                {new Date().toLocaleDateString()}
              </div>
            </div>

            {/* Neon başlık - zarfın altında */}
            <span
              className="block mt-[350px] text-center text-3xl text-red-950 font-[Special+Elite]"
              style={{
                textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000',
              }}
            >
              {env.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Answer;
