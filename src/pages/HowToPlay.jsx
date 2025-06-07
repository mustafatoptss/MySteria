import React from 'react'
import bg from '../images/bg-3.jpeg'
import { motion } from 'framer-motion'

function HowToPlay() {
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
            İster tek başına ya da ekibinle birlikte zamana karşı oynayarak katili en kısa sürede bulmaya çalışabilir, istersen de senin ve arkadaşlarının şüpheliler arasında bulunduğu senaryoda (çok yakında gelecek) yaşanan olayların arkasındaki gizemi çözen ve katili bulan ilk kişi olmaya çalışabilirsin.
          </p>
          <p className="mb-6 text-2xl">
            5N1Katil dedektiflik oyununu oynamak için gereken her şeyi PDF formatında sana sunuyoruz. Gerekli tüm belgeleri yazdırarak evde veya her neredeysen bulunduğun yeri bir soruşturma ofisine çevirebilirsin.
          </p>
          <p className="mb-6 text-2xl">
            Eğer yazdırma imkanın yoksa tüm içerikleri PDF formatında indirip dijital olarak da oynayabilirsin.
          </p>
          <p className='text-2xl'>
            Başlamaya hazır olduğunda sana teslim edilen dosyayı detaylıca incelemeli ve ipuçlarını çözmelisin. Kendini hazır hissettiğinde, ilgili senaryoya ait sayfanın altındaki 5N1Katil sorularını cevaplayarak vakayı çözmeyi deneyebilirsin.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default HowToPlay
