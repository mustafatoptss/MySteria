import React from 'react'
import img3 from '../images/img31.jpg'
import img4 from '../images/img32.jpg'
import img5 from '../images/img33.jpg'
import img6 from '../images/img34.jpg'

const items = [
  {
    title: 'Kayıp Mücevherin Sırrı',
    description:
      'Zengin bir koleksiyoncunun nadide mücevheri aniden ortadan kaybolur. Oyuncu, evin içinde gizlenmiş ipuçlarını ve şüphelilerin ifadelerini dikkatlice inceleyerek mücevherin yerini ve gerçek hırsızı ortaya çıkarmaya çalışır. Bu karmaşık olayda her detay önemlidir.',
    pdfLink: '/pdfs/kayip-mucevher.pdf',
  },
  {
    title: 'Sisli Şehir Cinayeti',
    description:
      'Sisler içinde kaybolmuş bir şehirde ünlü bir gazeteci öldürülür. Oyuncu, karanlık sokaklarda bulduğu kanıtları ve şüphelilerin gizli ilişkilerini çözerek, şehri sarsan bu cinayetin ardındaki gerçeği açığa çıkarmaya çalışır.',
    pdfLink: '/pdfs/sisli-sehir.pdf',
  },
  {
    title: 'Gizemli Mektup',
    description:
      'Bir gece ansızın gelen şifreli bir mektup, oyuncuyu bilinmezlerle dolu bir hazine avına sürükler. Mektubun sırlarını çözüp ipuçlarını birleştirerek, unutulmuş hazinenin yerini bulmak için zekâ ve dikkat gereklidir.',
    pdfLink: '/pdfs/gizemli-mektup.pdf',
  },
  {
    title: 'Son Vaka: Kaybolan Dedektif',
    description:
      'Tecrübeli bir dedektif gizemli şekilde ortadan kaybolur. Oyuncu, onun geride bıraktığı notları ve izleri takip ederek, kayıp dedektifi bulmaya ve onu tehlikeden kurtarmaya çalışır. Zaman daralmaktadır ve her saniye önemlidir.',
    pdfLink: '/pdfs/son-vaka.pdf',
  },
]

function GameScreen() {
  return (
    <div  className="bg-[#1a1a1a] h-screen grid grid-cols-4 grid-rows-1 mt-3">
      {[img3, img4, img5, img6].map((img, idx) => (
        <div
          key={idx}
          style={{
            backgroundImage: `url(${img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          
          }}
          className="relative h-screen flex flex-col justify-center items-center
                     text-white font-bold transform transition-transform duration-300 hover:scale-105 cursor-pointer p-6"
        >
          <div className="max-w-md text-center">
            <h2 className="text-3xl mb-4 drop-shadow-lg">{items[idx].title}</h2>
            <p className="text-lg font-normal drop-shadow-lg leading-relaxed">
              {items[idx].description}
            </p>
          </div>
          <a
            href={items[idx].pdfLink}
            download
            className="mt-16 px-6 py-3 bg-transparent hover:bg-black  hover:text-white text-white border text-3xl font-semibold rounded-lg shadow-lg transition-colors"
          >
            PDF’i İndir
          </a>
        </div>
      ))}
    </div>
  )
}

export default GameScreen
