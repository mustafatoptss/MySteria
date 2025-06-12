import React from 'react'
import bg from '../images/bg-3.jpeg'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

function HowToPlay() {
  const navigate = useNavigate();

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Degrade ve Blur Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80 backdrop-blur-sm"></div>

      {/* İçerik */}
      <div className="relative z-10 text-white px-6 max-w-6xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold mb-10 drop-shadow-lg"
        >
          MySteria Nasıl Oynanır?
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg md:text-xl leading-relaxed text-gray-200 bg-black/60 p-6 md:p-10 rounded-xl shadow-2xl backdrop-blur-md"
        >
        <p className="mb-6 text-2xl">
  İstersen tek başına, istersen de takımınla birlikte zamana karşı yarışarak katili en hızlı şekilde bulmaya çalışabilirsin. Çok yakında çıkacak yeni senaryoda ise sen ve arkadaşların şüpheli konumunda olacak, yaşanan gizemli olayları çözerek katili bulan ilk kişi olmaya çalışacaksınız.
</p>
<p className="mb-6 text-2xl">
  MySteria dedektiflik oyunu için ihtiyaç duyduğun tüm materyalleri PDF formatında sana sunuyoruz. Bu belgeleri yazdırıp evde ya da bulunduğun herhangi bir yerde kendi soruşturma odanı oluşturabilirsin.
</p>
<p className="mb-6 text-2xl">
  Yazdırma imkanın yoksa, PDF dosyalarını indirerek dijital ortamda da oyun deneyimini yaşayabilirsin.
</p>
<p className="text-2xl">
  Hazır olduğunda sana verilen dosyayı dikkatlice incele, ipuçlarını çöz ve ilgili senaryoya ait sayfanın altındaki MySteria sorularını yanıtlayarak vakayı çözmeye çalış.
</p>


          {/* Buton */}
          <div className='mt-12 flex justify-center'>
            <button
              onClick={() => navigate('/game')}
              className="bg-red-600 hover:bg-amber-600 text-black font-semibold px-8 py-3 rounded-lg transition duration-300"
            >
              Oyuna Başla
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HowToPlay
