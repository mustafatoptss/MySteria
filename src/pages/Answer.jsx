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
      title: "Sisli Şehir",
          answer: `
🔥 Cinayet Açıklaması: Katil(ler) Kim, Nasıl İşledi?

Cinayet, iki kişinin iş birliğiyle planlandı ve uygulandı:
👉 Elif Yaman (intikam ve proje dosyası motivasyonuyla)
👉 Tahir Akçay (eski borç ve ortaklık nedeniyle).

🔍 Olay Gecesi Gerçekler

22:30 – Elif, danışman kimliğiyle konağa geldi. Adem ile özel bir görüşme yaptı. Elinde, babasının kaybolmasından Adem'i sorumlu tutan kanıtlar vardı. Tartışma büyüdü. Elif, Adem'den ses kaydı tehdidiyle babasının dosyasını istedi. Adem dosyayı vermedi, “Sakın konuşma” mesajını o an gönderdi.

23:40 – Tahir, polis olmanın verdiği yetkiyle konağa gizlice girdi. Elektrik panosuyla kısa süreli kesinti yarattı (47 saniyelik karanlık). Arka servis merdivenlerinden Adem’in odasına çıktı.

23:45 - 00:05 – Adem, Elif'le tartışırken, Tahir kapının iç kilidini “ters manyetik tokayla” içeriden açtı. Elif, Adem’i yüzüne doğru tırnakladı (bilekteki iz bu sırada oluştu). Tahir, önce yumrukladı (çürük), sonra kayıp silahla (önceden Elif tarafından temin edilmiş) kafasına tek kurşun sıktı.

🩸 Çelişkiler Açıklanıyor

Can’ın DNA’sı, o gece Adem’le kavga eden Can’a ait değil; eski bir boğuşmanın izleri.

Kanın büyük kısmı Adem’e ait, ancak havluda bulunan kan Elif’e ait (bileğindeki çizik bu sırada oluştu).

Meral masum değil; ilişkisi vardı ancak olay gecesi yalan söylemesi ilişkiyi gizlemek için.

⚖️ Motivasyonlar

Elif: Babası Haluk’un ölümünden Adem’i sorumlu tuttu ve enerji projesinin kasabayı yok edeceğine inandı.

Tahir: Haluk’un ölümüne istemeden karışmıştı, Adem’le eski suç bağları vardı ve Elif tarafından şantajla işbirliğine zorlandı.

🧩 Sonuç
Katil:
🔪 Elif Yaman – Planın beyni, intikamın taşıyıcısı.
🛠️ Tahir Akçay – Suikastın teknik destekçisi ve infazı gerçekleştiren kişi.

Ve bazen, adalet sadece bir kurşun ve bir sırla karanlıkta yazılır...`

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
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [openedEnvelope]);

  return (
    <div className="min-h-screen bg-[#1a1a1a] py-10 px-4 font-[serif]" ref={containerRef}>
      <h1
        className="text-3xl sm:text-5xl md:text-7xl font-bold text-center mb-8 sm:mb-12 text-red-950 font-[Special+Elite]"
        style={{
          textShadow: '0 0 5px #ff0000, 0 0 10px #ff0000, 0 0 20px #ff0000',
        }}
      >
        Davalar Arşivi
      </h1>
      <p className="text-center text-red-600 text-base sm:text-lg mb-8">Gerçekleri Görmek İçin Zarfa Tıklayın</p>

      <div className="flex justify-center items-center gap-6 sm:gap-10 flex-wrap">
        {envelopes.map((env, index) => (
          <div
            key={env.id}
            ref={el => envelopeRefs.current[index] = el}
            onClick={(e) => handleEnvelopeClick(env.id, e)}
            className="relative cursor-pointer transition-all duration-300 w-[90vw] sm:w-[300px] h-[180px] sm:h-[200px] m-2 sm:m-4"
          >
            {/* Zarf PNG */}
            <img
              src={letter}
              alt="Zarf"
              className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
                openedEnvelope === env.id ? 'opacity-40' : 'opacity-100'
              }`}
              style={{ zIndex: 2 }}
            />

            {/* Zarf alt kısmı */}
            <div
              className={`absolute bottom-0 w-full rounded-b-lg border border-stone-600 transition-all duration-500 ${
                openedEnvelope === env.id ? 'h-1/2' : 'h-full'
              }`}
              style={{
                backgroundImage: `url('https://www.transparenttextures.com/patterns/old-paper.png')`,
                backgroundColor: '#e6ccb2',
                backgroundBlendMode: 'multiply',
                zIndex: 1,
              }}
            ></div>

            {/* Açılan bilgi kutusu */}
            <div
              className={`fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ${
                openedEnvelope === env.id ? 'opacity-100 visible' : 'opacity-0 invisible'
              }`}
            >
              <div
                className="bg-[#f3eacb] border border-stone-400 shadow-2xl rounded-lg p-4 sm:p-6 w-[90vw] max-w-3xl h-[80vh] overflow-y-auto relative"
                style={{
                  backgroundImage: `url('https://www.transparenttextures.com/patterns/paper-fibers.png')`,
                  backgroundBlendMode: 'multiply',
                }}
              >
                <h3 className="text-red-950 font-bold text-xl sm:text-2xl mb-4 font-[Special+Elite]">
                  {env.title} Çözümü
                </h3>
                <pre className="text-stone-700 text-sm sm:text-base whitespace-pre-wrap">
                  {env.answer}
                </pre>
                <div className="absolute bottom-4 right-4 text-xs text-gray-500">
                  {new Date().toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* Başlık */}
            <span
              className="block mt-[190px] sm:mt-[220px] text-center text-lg sm:text-2xl text-red-950 font-[Special+Elite]"
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
