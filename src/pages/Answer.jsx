import React, { useState, useRef, useEffect } from 'react';
import letter from '../images/letter.png';

function Answer() {
  const [openedEnvelope, setOpenedEnvelope] = useState(null);
  const envelopeRefs = useRef([]);
  const containerRef = useRef(null);

  const envelopes = [
    { 
      id: 1, 
      title: "Dava 1", 
      answer: "Katil, kurbanın en yakın arkadaşıydı. Saat 23:00'te güvenlik kamerasında görülmüştür." 
    },
    { 
      id: 2, 
      title: "Sisli Şehir Cinayeti", 
      answer: `🔥 Cinayet Açıklaması: Katil(ler) Kim, Nasıl İşledi?
Cinayet, iki kişinin iş birliğiyle planlandı ve uygulandı:
👉 Elif Yaman (intikam ve proje dosyası motivasyonuyla)
👉 Tahir Akçay (eski borç ve ortaklık nedeniyle).

🔍 Olay Gecesi Gerçekler
22:30 – Elif, danışman kimliğiyle konağa geldi. Adem ile özel görüşme yaptı. Elinde, babasının kaybolmasından Adem'i sorumlu tutan kanıtlar vardı. Tartışma büyüdü. Elif, Adem'den ses kaydı tehdidiyle babasının dosyasını istedi. Adem dosyayı vermedi, "Sakın konuşma" mesajını o an gönderdi.

23:40 – Tahir, polis olmanın verdiği yetkiyle konağa girdi. Elektrik panosuyla kısa süreli kesintiyi yarattı (47 saniyelik karanlık) ve içeri gizlice girdi. Adem'in odasına çıkan arka servis merdivenlerini kullandı.

23:45 - 00:05 – Adem, içeride Elif'le tartışırken, Tahir kapının iç kilidini "ters manyetik tokayla" içeriden açtı. Elif, Adem'i yüzüne doğru tırnakladı (bilekteki iz bu sırada oluştu). Tahir, Adem'i önce yumrukladı (çürük), sonra kayıp silahla (önceden Elif tarafından alınmış) yakın mesafeden kafasına tek kurşun sıktı.

🩸 Çelişkiler Açıklanıyor
Can'ın DNA'sı: O gece Adem'le kavga eden Can değil, eski bir boğuşmanın izi. Kan Adem'e ait ama havludaki kan Elif'e ait (bileği çizildiğinde sildi).

Meral: Masum değil; ilişkisi vardı, ama olay gecesi yalan söylemesi ilişkiyi gizlemek için.

⚖️ Motivasyonlar
Elif: Babası Haluk'un ölümünden Adem'i sorumlu tuttu. Aynı zamanda enerji projesiyle kasabanın yok olacağını düşündü.

Tahir: Haluk'un ölümüne istemeden karışmıştı, Adem'le eski suç bağları vardı. Elif tarafından şantajla dahil edildi.

🧩 Sonuç
Katil:
🔪 Elif Yaman – Planın beyni, intikamın taşıyıcısı.
🛠️ Tahir Akçay – Suikastın teknik destekçisi ve infazı gerçekleştiren kişi.`
    },
    { 
      id: 3, 
      title: "Dava 3", 
      answer: "Zehir, kurbanın en sevdiği kahve markasına enjekte edilmişti. Katil kahve satıcısıydı." 
    },
    { 
      id: 4, 
      title: "Dava 4", 
      answer: "Şantajcı, kurbanın eski üniversite oda arkadaşı çıktı. Aralarındaki eski bir fotoğrafı kullanmıştı." 
    }
  ];

  const handleEnvelopeClick = (id, e) => {
    e.stopPropagation();
    setOpenedEnvelope(openedEnvelope === id ? null : id);
  };

  const handleClickOutside = (e) => {
    if (openedEnvelope && !containerRef.current.contains(e.target)) {
      setOpenedEnvelope(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openedEnvelope]);

  return (
    <div 
      className="min-h-screen bg-[#1a1a1a] py-12 px-4 font-[serif]"
      ref={containerRef}
    >
      <h1
        style={{
          textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000',
        }}
        className="text-4xl md:text-7xl font-bold text-center mb-12 text-red-950 font-[Special+Elite]"
      >
        Davalar Arşivi
      </h1>

      <div className="flex justify-center items-center gap-8 md:gap-16 max-w-full mt-12 md:mt-36 mx-auto flex-wrap">
        {envelopes.map((env, index) => (
          <div
            key={env.id}
            ref={el => envelopeRefs.current[index] = el}
            style={{ width: '300px', height: '200px' }}
            className="relative cursor-pointer transition-all duration-300 m-4"
            onClick={(e) => handleEnvelopeClick(env.id, e)}
          >
            {/* "TIKLA" text in neon style above envelope */}
            <span
              className="block absolute top-0 z-50 left-0 w-full text-center text-xl md:text-2xl text-red-950 font-[Special+Elite]"
              style={{
                textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000',
              }}
            >
              TIKLA
            </span>

            {/* Zarf PNG */}
            <img
              src={letter}
              alt="Zarf"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-all duration-500 
                ${openedEnvelope === env.id ? 'opacity-50' : 'opacity-100'}`}
              style={{ zIndex: 2 }}
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

            {/* Büyük kağıt */}
            <div
              className={`fixed md:absolute shadow-lg rounded-lg p-4 md:p-6 border border-stone-400 transition-all duration-500 
                ${openedEnvelope === env.id ?
                  'opacity-100 w-[90vw] md:w-[150%] h-[80vh] md:h-[250%] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] md:-top-20 md:-left-[25%] md:translate-x-0 md:translate-y-0 z-50' :
                  'opacity-0 w-0 h-0 top-1/2 left-1/2'}`}
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                backgroundColor: '#f3eacb',
                backgroundBlendMode: 'multiply',
                overflowY: 'auto',
                maxHeight: 'none'
              }}
            >
              <h3 className="text-red-950 font-bold text-xl md:text-2xl mb-4 font-[Special+Elite]">
                {env.title} Çözümü
              </h3>
              <pre className="text-stone-700 text-sm md:text-lg font-[serif] whitespace-pre-wrap">
                {env.answer}
              </pre>
              <div className="absolute bottom-4 right-4 text-sm text-gray-500">
                {new Date().toLocaleDateString()}
              </div>
            </div>

            {/* Neon başlık - zarfın altında */}
            <span
              className="block mt-[220px] text-center text-xl md:text-3xl text-red-950 font-[Special+Elite]"
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