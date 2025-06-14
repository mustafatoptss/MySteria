import React from 'react';
import { useNavigate } from 'react-router-dom';
import img3 from '../images/img31.jpg';
import img4 from '../images/img32.jpg';
import img5 from '../images/img33.jpg';
import img6 from '../images/img34.jpg';

const items = [
  {
    title: 'Kayıp Mücevherin Sırrı / Aktif Değil',
    description: 'Zengin bir koleksiyoncunun nadide mücevheri kaybolur...',
    content: 'Bu hikayenin detaylı içeriği burada olacak...',
    pdfName: 'kayip-mucevher.pdf'
  },
  {
    title: 'Sisli Şehir Cinayeti / Aktif',
    description: 'Sisler içinde kaybolmuş şehirde cinayet işlenir...',
    pdfName: 'sisli-sehir-cinayeti.pdf',
   
  },
  {
    title: 'Gizemli Mektup / Aktif Değil',
    description: 'Bir gece gelen şifreli mektup olayları başlatır...',
    pdfName: 'gizemli-mektup.pdf'
  },
  {
    title: 'Kaybolan Dedektif / Aktif Değil',
    description: 'Deneyimli dedektif ortadan kaybolur...',
    pdfName: 'son-vaka-kaybolan-dedektif.pdf'
  }
];

const images = [img3, img4, img5, img6];

function GameScreen() {
  const navigate = useNavigate();

  const handleRedirect = (item) => {
      const caseId = item.pdfName.replace('.pdf', '');
  navigate('/pay', { state: { pdfName: item.pdfName, caseId, caseData: item } });
  };

  return (
   <div className="grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1 h-screen">
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            backgroundImage: `url(${images[idx]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          className="relative p-6 text-white flex flex-col justify-center items-center hover:scale-105 transition-transform cursor-pointer"
        >
          <h2 className="text-2xl font-bold mb-4 drop-shadow">{item.title}</h2>
          <p className="text-md mb-6">{item.description}</p>
          <button
            onClick={() => handleRedirect(item)}
            className="bg-black/70 px-5 py-2 rounded-lg hover:bg-red-700 font-semibold"
          >
            Oyna
          </button>
        </div>
      ))}
    </div>
  );
}

export default GameScreen;
